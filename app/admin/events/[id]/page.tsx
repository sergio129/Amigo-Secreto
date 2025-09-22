'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useParams } from 'next/navigation'

interface Participant {
  _id: string
  name: string
  email?: string
}

interface Event {
  _id: string
  name: string
  description: string
  date: string
  isActive: boolean
  participants: Participant[]
}

export default function EventManagementPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const params = useParams()
  const eventId = params.id as string

  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingParticipant, setEditingParticipant] = useState<Participant | null>(null)
  const [newParticipant, setNewParticipant] = useState({ name: '', email: '' })

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/admin/login')
      return
    }
    if (eventId) {
      loadEvent()
    }
  }, [session, status, router, eventId])

  const loadEvent = async () => {
    try {
      const response = await fetch(`/api/admin/events/${eventId}`)
      if (response.ok) {
        const eventData = await response.json()
        setEvent(eventData)
      }
    } catch (error) {
      console.error('Error loading event:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddParticipant = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch(`/api/admin/events/${eventId}/participants`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newParticipant)
      })

      if (response.ok) {
        setShowAddModal(false)
        setNewParticipant({ name: '', email: '' })
        loadEvent()
      }
    } catch (error) {
      console.error('Error adding participant:', error)
    }
  }

  const handleDeleteParticipant = async (participantId: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este participante?')) {
      return
    }

    try {
      const response = await fetch(`/api/admin/events/${eventId}/participants/${participantId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        loadEvent()
      }
    } catch (error) {
      console.error('Error deleting participant:', error)
    }
  }

  const handleEditParticipant = (participant: Participant) => {
    setEditingParticipant(participant)
    setShowEditModal(true)
  }

  const handleToggleActive = async () => {
    if (!event) return

    try {
      const response = await fetch(`/api/admin/events/${eventId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ isActive: !event.isActive })
      })

      if (response.ok) {
        loadEvent()
      }
    } catch (error) {
      console.error('Error updating event:', error)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    )
  }

  if (!session || !event) {
    return null
  }

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1>🎁 Gestionar Evento</h1>
          <h3>{event.name}</h3>
          <p className="text-muted">{event.description}</p>
        </div>
        <div>
          <button
            className="btn btn-outline-secondary me-2"
            onClick={() => router.push('/admin')}
          >
            ← Volver
          </button>
          <button
            className={`btn ${event.isActive ? 'btn-warning' : 'btn-success'}`}
            onClick={handleToggleActive}
          >
            {event.isActive ? 'Desactivar' : 'Activar'}
          </button>
        </div>
      </div>

      {/* Event Info */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">📊 Estadísticas</h5>
              <p className="mb-1">👥 Participantes: {event.participants.length}</p>
              <p className="mb-1">📅 Fecha: {new Date(event.date).toLocaleDateString('es-ES')}</p>
              <p className="mb-0">📊 Estado: {event.isActive ? 'Activo' : 'Inactivo'}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">🔗 Enlaces</h5>
              <p>
                <a
                  href={`/event/${event._id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm me-2"
                >
                  Ver Página Pública
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Participants Section */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Participantes</h2>
        <button
          className="btn btn-gradient"
          onClick={() => setShowAddModal(true)}
        >
          ➕ Agregar Participante
        </button>
      </div>

      {event.participants.length === 0 ? (
        <div className="card">
          <div className="card-body text-center py-5">
            <div className="mb-3">👥</div>
            <h4>No hay participantes</h4>
            <p className="text-muted">Agrega participantes para que puedan seleccionar su amigo secreto</p>
            <button
              className="btn btn-gradient"
              onClick={() => setShowAddModal(true)}
            >
              Agregar Primer Participante
            </button>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {event.participants.map((participant) => (
                    <tr key={participant._id}>
                      <td>{participant.name}</td>
                      <td>{participant.email || '-'}</td>
                      <td>
                        <button
                          className="btn btn-outline-warning btn-sm me-2"
                          onClick={() => handleEditParticipant(participant)}
                        >
                          ✏️ Editar
                        </button>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => handleDeleteParticipant(participant._id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Add Participant Modal */}
      {showAddModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Agregar Participante</h5>
                <button type="button" className="btn-close" onClick={() => setShowAddModal(false)}></button>
              </div>
              <form onSubmit={handleAddParticipant}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={newParticipant.name}
                      onChange={(e) => setNewParticipant({...newParticipant, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email (opcional)</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={newParticipant.email}
                      onChange={(e) => setNewParticipant({...newParticipant, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowAddModal(false)}>
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-gradient">
                    Agregar Participante
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Edit Participant Modal */}
      {showEditModal && editingParticipant && (
        <EditParticipantModal
          participant={editingParticipant}
          eventId={eventId}
          onClose={() => {
            setShowEditModal(false)
            setEditingParticipant(null)
          }}
          onSuccess={() => {
            setShowEditModal(false)
            setEditingParticipant(null)
            loadEvent()
          }}
        />
      )}
    </div>
  )
}

// Edit Participant Modal Component
function EditParticipantModal({ 
  participant, 
  eventId, 
  onClose, 
  onSuccess 
}: { 
  participant: Participant
  eventId: string
  onClose: () => void
  onSuccess: () => void 
}) {
  const [formData, setFormData] = useState({
    name: participant.name,
    email: participant.email || ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch(`/api/admin/events/${eventId}/participants/${participant._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        onSuccess()
      } else {
        const errorData = await response.json()
        setError(errorData.error || 'Error al actualizar el participante')
      }
    } catch (error) {
      console.error('Error updating participant:', error)
      setError('Error al actualizar el participante')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">✏️ Editar Participante</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              {error && (
                <div className="alert alert-danger">{error}</div>
              )}
              
              <div className="mb-3">
                <label htmlFor="edit-participant-name" className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="edit-participant-name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="edit-participant-email" className="form-label">Email (opcional)</label>
                <input
                  type="email"
                  className="form-control"
                  id="edit-participant-email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancelar
              </button>
              <button type="submit" className="btn btn-gradient" disabled={loading}>
                {loading ? 'Actualizando...' : 'Actualizar Participante'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}