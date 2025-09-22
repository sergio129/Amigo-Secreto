'use client'

import { useState } from 'react'
import { signIn, getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Email o contraseña incorrectos')
      } else {
        router.push('/admin')
      }
    } catch (error) {
      setError('Error al iniciar sesión')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card admin-card">
            <div className="card-header text-center">
              <h2>🎁 Admin - Amigo Secreto</h2>
              <p className="text-muted">Inicia sesión para gestionar eventos</p>
            </div>
            <div className="card-body">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-gradient w-100"
                  disabled={loading}
                >
                  {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                </button>
              </form>
              
              <div className="mt-3 text-center">
                <small className="text-muted">
                  ¿No tienes cuenta? <a href="/admin/register" className="text-decoration-none">Regístrate aquí</a>
                </small>
              </div>
              
              <div className="mt-2 text-center">
                <small className="text-muted">
                  <strong>Credenciales de prueba:</strong><br/>
                  <em>Los usuarios invitados deben registrarse primero</em>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}