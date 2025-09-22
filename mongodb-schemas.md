# Esquemas MongoDB para Amigo Secreto

## 1. amigo_secreto_admins (nueva tabla simple)
```javascript
{
  _id: ObjectId,
  email: string,
  password: string, // hasheado con bcrypt
  name: string,
  createdAt: Date
}
```

## 2. amigo_secreto_events
```javascript
{
  _id: ObjectId,
  name: string, // "Navidad 2024", "Amigo Secreto Empresa"
  description: string,
  status: string, // "active" | "finished" | "draft"
  createdBy: string, // email del admin
  createdAt: Date,
  updatedAt: Date
}
```

## 3. participants
```javascript
{
  _id: ObjectId,
  eventId: ObjectId, // referencia a amigo_secreto_events
  name: string,
  email: string, // opcional
  isRevealed: boolean,
  revealedAt: Date,
  createdAt: Date
}
```

## 4. assignments
```javascript
{
  _id: ObjectId,
  eventId: ObjectId, // referencia a amigo_secreto_events
  giverId: ObjectId, // referencia a participants
  receiverId: ObjectId, // referencia a participants
  createdAt: Date
}
```

## URLs:

### Admin (simple):
- `/admin/login` - Login administrador
- `/admin` - Dashboard: lista eventos + crear nuevo
- `/admin/event/[id]` - Gestionar participantes de un evento

### Público:
- `/` - Lista eventos activos
- `/event/[id]` - Seleccionar participante en evento específico