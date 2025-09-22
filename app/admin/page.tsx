'use client'

import { useEffect, useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface Event {
  _id: string
  name: string
  description: string
  date: string
  isActive: boolean
  participantCount?: number
}

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/admin/login')
      return
    }
    loadEvents()
  }, [session, status, router])

  const loadEvents = async () => {
    try {
      const response = await fetch('/api/admin/events')
      if (response.ok) {
        const data = await response.json()
        console.log('Loaded events:', data) // Debug log
        setEvents(data)
      } else {
        console.error('Failed to load events:', response.status)
      }
    } catch (error) {
      console.error('Error loading events:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = () => {
    signOut({ callbackUrl: '/admin/login' })
  }

  const handleEditEvent = (event: Event) => {
    setEditingEvent(event)
    setShowEditModal(true)
  }

  const handleDeleteEvent = async (eventId: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este evento? Se eliminarán también todos los participantes asociados.')) {
      return
    }

    try {
      const response = await fetch(`/api/admin/events/${eventId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        loadEvents() // Recargar la lista de eventos
      } else {
        alert('Error al eliminar el evento')
      }
    } catch (error) {
      console.error('Error deleting event:', error)
      alert('Error al eliminar el evento')
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

  if (!session) {
    return null
  }

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1>🎁 Panel de Administración</h1>
          <p className="text-muted">Bienvenido, {session.user?.email}</p>
        </div>
        <div>
          <button 
            className="btn btn-outline-danger"
            onClick={handleSignOut}
          >
            Cerrar sesión
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card stats-card">
            <div className="card-body text-center">
              <div className="stats-icon">🎄</div>
              <h3>{events.length}</h3>
              <p className="text-muted">Eventos Totales</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card stats-card">
            <div className="card-body text-center">
              <div className="stats-icon">✅</div>
              <h3>{events.filter(e => e.isActive).length}</h3>
              <p className="text-muted">Eventos Activos</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card stats-card">
            <div className="card-body text-center">
              <div className="stats-icon">👥</div>
              <h3>{events.reduce((sum, e) => sum + (e.participantCount || 0), 0)}</h3>
              <p className="text-muted">Participantes Totales</p>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Eventos</h2>
        <button 
          className="btn btn-gradient"
          onClick={() => setShowCreateModal(true)}
        >
          ➕ Crear Evento
        </button>
      </div>

      {events.length === 0 ? (
        <div className="card">
          <div className="card-body text-center py-5">
            <div className="mb-3">🎁</div>
            <h4>No hay eventos creados</h4>
            <p className="text-muted">Crea tu primer evento de Amigo Secreto</p>
            <button 
              className="btn btn-gradient"
              onClick={() => setShowCreateModal(true)}
            >
              Crear Primer Evento
            </button>
          </div>
        </div>
      ) : (
        <div className="row">
          {events.map(event => (
            <div key={event._id} className="col-md-6 col-lg-4 mb-3">
              <div className="card event-card h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="card-title">{event.name}</h5>
                    <span className={`badge ${event.isActive ? 'bg-success' : 'bg-secondary'}`}>
                      {event.isActive ? 'Activo' : 'Inactivo'}
                    </span>
                  </div>
                  <p className="card-text text-muted">{event.description}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      📅 {new Date(event.date).toLocaleDateString('es-ES')}
                    </small>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      👥 {event.participantCount || 0} participantes
                    </small>
                  </p>
                </div>
                <div className="card-footer bg-transparent">
                  <button 
                    className="btn btn-outline-warning btn-sm me-2"
                    onClick={() => handleEditEvent(event)}
                  >
                    ✏️ Editar
                  </button>
                  <button 
                    className="btn btn-outline-primary btn-sm me-2"
                    onClick={() => router.push(`/admin/events/${event._id}`)}
                  >
                    Gestionar
                  </button>
                  <button 
                    className="btn btn-outline-success btn-sm me-2"
                    onClick={() => window.open(`/event/${event._id}`, '_blank')}
                  >
                    Ver Público
                  </button>
                  <button 
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleDeleteEvent(event._id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create Event Modal */}
      {showCreateModal && (
        <CreateEventModal 
          onClose={() => setShowCreateModal(false)}
          onSuccess={() => {
            setShowCreateModal(false)
            loadEvents()
          }}
        />
      )}

      {/* Edit Event Modal */}
      {showEditModal && editingEvent && (
        <EditEventModal 
          event={editingEvent}
          onClose={() => {
            setShowEditModal(false)
            setEditingEvent(null)
          }}
          onSuccess={() => {
            setShowEditModal(false)
            setEditingEvent(null)
            loadEvents()
          }}
        />
      )}
    </div>
  )
}

// Create Event Modal Component
function CreateEventModal({ onClose, onSuccess }: { onClose: () => void, onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        onSuccess()
      } else {
        const data = await response.json()
        setError(data.error || 'Error al crear el evento')
      }
    } catch (error) {
      setError('Error de conexión')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Crear Nuevo Evento</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              {error && (
                <div className="alert alert-danger">{error}</div>
              )}
              
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre del Evento</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Descripción</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="date" className="form-label">Fecha del Evento</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancelar
              </button>
              <button type="submit" className="btn btn-gradient" disabled={loading}>
                {loading ? 'Creando...' : 'Crear Evento'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

// Edit Event Modal Component
function EditEventModal({ event, onClose, onSuccess }: { event: Event, onClose: () => void, onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    name: event.name,
    description: event.description,
    date: event.date.split('T')[0], // Format for date input
    isActive: event.isActive
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch(`/api/admin/events/${event._id}`, {
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
        setError(errorData.error || 'Error al actualizar el evento')
      }
    } catch (error) {
      console.error('Error updating event:', error)
      setError('Error al actualizar el evento')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">✏️ Editar Evento</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              {error && (
                <div className="alert alert-danger">{error}</div>
              )}
              
              <div className="mb-3">
                <label htmlFor="edit-name" className="form-label">Nombre del Evento</label>
                <input
                  type="text"
                  className="form-control"
                  id="edit-name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="edit-description" className="form-label">Descripción</label>
                <textarea
                  className="form-control"
                  id="edit-description"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="edit-date" className="form-label">Fecha del Evento</label>
                <input
                  type="date"
                  className="form-control"
                  id="edit-date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  required
                />
              </div>

              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="edit-isActive"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({...formData, isActive: e.target.checked})}
                  />
                  <label className="form-check-label" htmlFor="edit-isActive">
                    Evento activo (visible para participantes)
                  </label>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancelar
              </button>
              <button type="submit" className="btn btn-gradient" disabled={loading}>
                {loading ? 'Actualizando...' : 'Actualizar Evento'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}