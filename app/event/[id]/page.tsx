'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

interface Participant {
  _id: string
  name: string
  email?: string
  isRevealed?: boolean
  revealedAt?: Date
}

interface Event {
  _id: string
  name: string
  description: string
  participants: Participant[]
  assignments?: Record<string, string>
}

export default function EventPage() {
  const params = useParams()
  const eventId = params.id as string

  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedParticipant, setSelectedParticipant] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [assignedPerson, setAssignedPerson] = useState<string>('')
  const [assignments, setAssignments] = useState<Record<string, string>>({})
  const [revealedParticipants, setRevealedParticipants] = useState<Set<string>>(new Set())
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info'; show: boolean } | null>(null)

  useEffect(() => {
    if (eventId) {
      loadEvent()
    }
  }, [eventId])

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

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToast({ message, type, show: true })
    // Auto-hide after 5 seconds
    setTimeout(() => {
      setToast(null)
    }, 5000)
  }

  const hideToast = () => {
    setToast(null)
  }

  const loadEvent = async () => {
    try {
      const response = await fetch(`/api/public/events/${eventId}`)
      if (response.ok) {
        const eventData = await response.json()
        setEvent(eventData)

        // Cargar solo el estado de revelación
        await loadRevelationStatus(eventData._id)
      } else {
        console.error('Event not found')
      }
    } catch (error) {
      console.error('Error loading event:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadRevelationStatus = async (eventId: string) => {
    try {
      // Solo necesitamos saber quién ya reveló, no las asignaciones completas
      const response = await fetch(`/api/public/events/${eventId}`)
      if (response.ok) {
        const eventData = await response.json()
        const revealed = eventData.participants
          .filter((p: Participant) => p.isRevealed)
          .map((p: Participant) => p.name)
        setRevealedParticipants(new Set(revealed))
      }
    } catch (error) {
      console.error('Error loading revelation status:', error)
    }
  }

  const handleParticipantSelect = async (participantName: string) => {
    if (revealedParticipants.has(participantName)) {
      return // Ya fue revelado
    }

    // Prevenir múltiples clics rápidos
    if (showResult) {
      return
    }

    setSelectedParticipant(participantName)

    // Generar asignación individual y marcar como revelado
    try {
      if (event) {
        const response = await fetch(`/api/public/events/${event._id}/assignments`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ participantName })
        })

        if (response.ok) {
          const data = await response.json()
          setAssignedPerson(data.assignment.receiver)
          setShowResult(true)

          // Actualizar estado local
          const newRevealed = new Set(revealedParticipants)
          newRevealed.add(participantName)
          setRevealedParticipants(newRevealed)

          // Mostrar mensaje específico según el tipo de respuesta
          if (data.message === 'Asignación existente recuperada') {
            showToast(`¡Tu amigo secreto es: ${data.assignment.receiver}!`, 'success')
          } else {
            showToast('¡Tu amigo secreto ha sido asignado!', 'success')
          }
        } else {
          const error = await response.json()
          console.error('Error generating assignment:', error)

          // Mostrar mensaje específico según el tipo de error
          if (error.error === 'No hay participantes disponibles para asignar') {
            showToast('🎄 ¡Felicitaciones! Ya todos los participantes han descubierto sus amigos secretos. El intercambio puede comenzar. 🎁', 'success')
          } else if (error.error === 'Participante ya revelado') {
            showToast('Ya has descubierto tu amigo secreto anteriormente.', 'info')
          } else {
            showToast('Error al generar la asignación. Inténtalo de nuevo.', 'error')
          }
        }
      }
    } catch (error) {
      console.error('Error generating assignment:', error)
      alert('Error al generar la asignación. Inténtalo de nuevo.')
    }
  }

  const closeResult = () => {
    setShowResult(false)
    setSelectedParticipant(null)
    setAssignedPerson('')
  }

  if (loading) {
    return (
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Cargando...</span>
          </div>
          <h5 className="text-muted">Cargando evento...</h5>
        </div>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="mb-4">
            <span style={{ fontSize: '4rem' }}>🎄</span>
          </div>
          <h2 className="mb-3">Evento no encontrado</h2>
          <p className="text-muted">El evento que buscas no existe o ha sido eliminado</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          {/* Header */}
          <div className="text-center mb-4">
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
          <h3 className="mb-3">🎁 Selecciona tu nombre 🎁</h3>
          <p className="text-muted">Haz clic en tu nombre para descubrir a quién debes regalar</p>
          <div className="christmas-decoration">
        
          </div>
        </div>

        {/* Participants Modal-like Container */}
        <div className="participants-modal-container">
          <div className="participants-modal-header text-center">
            <div className="modal-icon">👥</div>
            <h5 className="modal-title">Lista de Participantes</h5>
            <div className="modal-subtitle">Elige tu nombre de la lista</div>
          </div>

          <div className="participants-modal-body">
            <div className="participants-grid row g-3">
              {event.participants.map((participant, index) => {
                const isRevealed = revealedParticipants.has(participant.name)
                return (
                  <div key={participant._id} className="col-6 col-md-4 col-lg-3">
                    <button
                      className={`participant-button w-100 ${isRevealed ? 'revealed' : 'available'}`}
                      onClick={() => handleParticipantSelect(participant.name)}
                      disabled={isRevealed}
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <div className="participant-content">
                        <div className="participant-name">
                          {participant.name}
                        </div>
                        <div className="participant-status">
                          {isRevealed ? (
                            <div className="status-revealed">
                              <span className="status-icon">✅</span>
                              <span className="status-text">Revelado</span>
                            </div>
                          ) : (
                            <div className="status-available">
                              <span className="status-icon">👆</span>
                              <span className="status-text">Haz clic</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {!isRevealed && <div className="button-glow"></div>}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="text-center mt-4">
          <div className="mb-2">
            <small className="text-muted">
              {revealedParticipants.size} de {event.participants.length} participantes han descubierto su amigo secreto
            </small>
          </div>
          {revealedParticipants.size === event.participants.length ? (
            <div className="alert alert-success py-2">
              <small>🎄 ¡Felicitaciones! Todos los participantes han descubierto sus amigos secretos. ¡El intercambio puede comenzar! 🎁</small>
            </div>
          ) : (
            <div className="progress" style={{ height: '6px' }}>
              <div
                className="progress-bar bg-success"
                style={{ width: `${(revealedParticipants.size / event.participants.length) * 100}%` }}
              ></div>
            </div>
          )}
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

      {/* Toast Notification */}
      {toast && toast.show && (
        <div
          className="toast show position-fixed"
          style={{
            top: '20px',
            right: '20px',
            zIndex: 1070,
            minWidth: '300px'
          }}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className={`toast-header bg-${toast.type === 'success' ? 'success' : toast.type === 'error' ? 'danger' : 'info'} text-white`}>
            <strong className="me-auto">
              {toast.type === 'success' && '🎄 ¡Felicitaciones!'}
              {toast.type === 'error' && '❌ Error'}
              {toast.type === 'info' && 'ℹ️ Información'}
            </strong>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={hideToast}
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            {toast.message}
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
  )
}