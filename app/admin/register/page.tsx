'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden')
      setLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      })

      if (response.ok) {
        router.push('/admin/login?message=Usuario registrado exitosamente')
      } else {
        const errorData = await response.json()
        setError(errorData.error || 'Error al registrar usuario')
      }
    } catch (error) {
      console.error('Error registering user:', error)
      setError('Error al registrar usuario')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <h2 className="h4 mb-2">🎁 Registro de Usuario</h2>
                <p className="text-muted small">Crea tu cuenta para gestionar eventos de Amigo Secreto</p>
              </div>

              {error && (
                <div className="alert alert-danger small">{error}</div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nombre Completo</label>
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
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                    minLength={6}
                  />
                  <div className="form-text small">Mínimo 6 caracteres</div>
                </div>

                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-gradient w-100"
                  disabled={loading}
                >
                  {loading ? 'Registrando...' : 'Crear Cuenta'}
                </button>
              </form>

              <div className="text-center mt-4">
                <p className="text-muted small mb-2">¿Ya tienes cuenta?</p>
                <Link href="/admin/login" className="btn btn-outline-primary btn-sm">
                  Iniciar Sesión
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}