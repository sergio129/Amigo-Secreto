'use client'

import { useState, useEffect } from 'react'
import { createAssignments } from '@/utils/secretSanta'

interface Participant {
  _id: string
  name: string
  email?: string
}

interface Event {
  _id: string
  name: string
  description: string
  participants: Participant[]
  assignments?: Record<string, string>
}

export default function HomePage() {
  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedParticipant, setSelectedParticipant] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [assignedPerson, setAssignedPerson] = useState<string>('')
  const [assignments, setAssignments] = useState<Record<string, string>>({})
  const [revealedParticipants, setRevealedParticipants] = useState<Set<string>>(new Set())

  useEffect(() => {
    loadEventAndAssignments()
  }, [])

  // Manejar el scroll del body cuando se abre la modal
  useEffect(() => {
    if (showResult) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showResult])

  const loadEventAndAssignments = async () => {
    try {
      // Por ahora cargamos el primer evento activo
      // TODO: Permitir seleccionar evento por URL param
      const response = await fetch('/api/public/events/active')
      if (response.ok) {
        const eventData = await response.json()
        setEvent(eventData)

        // Cargar asignaciones desde localStorage
        const storageKey = `assignments-${eventData._id}`
        const savedAssignments = localStorage.getItem(storageKey)
        const savedRevealed = localStorage.getItem(`revealed-${eventData._id}`)

        let currentAssignments = {}
        if (savedAssignments) {
          currentAssignments = JSON.parse(savedAssignments)
        } else {
          // Generar nuevas asignaciones
          const participantNames = eventData.participants.map((p: Participant) => p.name)
          currentAssignments = createAssignments(participantNames)
          localStorage.setItem(storageKey, JSON.stringify(currentAssignments))
        }

        setAssignments(currentAssignments)

        if (savedRevealed) {
          setRevealedParticipants(new Set(JSON.parse(savedRevealed)))
        }
      }
    } catch (error) {
      console.error('Error loading event:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleParticipantSelect = (participantName: string) => {
    if (revealedParticipants.has(participantName)) {
      return // Ya fue revelado
    }

    // Prevenir múltiples clics rápidos
    if (showResult) {
      return
    }

    setSelectedParticipant(participantName)
    const assigned = assignments[participantName]
    setAssignedPerson(assigned)
    setShowResult(true)

    // Marcar como revelado
    const newRevealed = new Set(revealedParticipants)
    newRevealed.add(participantName)
    setRevealedParticipants(newRevealed)

    // Guardar en localStorage
    if (event) {
      localStorage.setItem(`revealed-${event._id}`, JSON.stringify(Array.from(newRevealed)))
    }
  }

  const closeResult = () => {
    setShowResult(false)
    setSelectedParticipant(null)
    setAssignedPerson('')
  }

  if (loading) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-3">Cargando evento...</p>
        </div>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <div className="mb-4">
            <span style={{ fontSize: '4rem' }}>🎄</span>
          </div>
          <h2>No hay eventos activos</h2>
          <p className="text-muted">Contacta al administrador para crear un evento</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-title mb-3">🎁 {event.name}</h1>
        <p className="text-muted mb-4">{event.description}</p>
        <div className="mb-4">
          <small className="text-muted">
            👥 {event.participants.length} participantes
          </small>
        </div>
      </div>

      {/* Main Card */}
      <div className="main-card mx-auto p-4">
        <div className="text-center mb-4">
          <h3 className="mb-3">Selecciona tu nombre</h3>
          <p className="text-muted">Haz clic en tu nombre para descubrir a quién debes regalar</p>
        </div>

        {/* Participants List */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="list-group" id="participantsList">
              {event.participants.map((participant) => {
                const isRevealed = revealedParticipants.has(participant.name)
                return (
                  <button
                    key={participant._id}
                    className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${
                      isRevealed ? 'disabled' : ''
                    }`}
                    onClick={() => handleParticipantSelect(participant.name)}
                    disabled={isRevealed}
                  >
                    <span>{participant.name}</span>
                    {isRevealed && (
                      <span className="badge bg-success">Revelado</span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="text-center mt-4">
          <small className="text-muted">
            {revealedParticipants.size} de {event.participants.length} participantes han descubierto su amigo secreto
          </small>
        </div>
      </div>

      {/* Result Modal */}
      {showResult && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1060 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content party-modal">
              <div className="modal-body text-center p-5">
                <div className="mb-4">
                  <span style={{ fontSize: '3rem' }}>🎉</span>
                </div>
                <h4 className="mb-3">¡Felicitaciones!</h4>
                <div id="secretAssignedText">
                  {selectedParticipant}, <br />
                  tu Amigo Secreto es:<br />
                  <strong style={{ fontSize: '1.6rem', color: '#ff6b6b' }}>
                    {assignedPerson}
                  </strong>
                </div>
                <button
                  className="btn btn-gradient mt-4 px-4 py-2"
                  onClick={closeResult}
                  style={{ zIndex: 1061 }}
                >
                  ¡Entendido!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}