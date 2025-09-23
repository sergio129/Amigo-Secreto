# Amigo Secreto (TypeScript, frontend)

Proyecto simple que implementa un sorteo de Amigo Secreto en el navegador usando TypeScript.

Características:
- Lista de participantes quemada en `src/app.ts`.
- Asignaciones generadas como una derangement (nadie se asigna a sí mismo).
- Persistencia ligera en `localStorage` para que cada participante solo pueda revelar una vez.
- Interfaz sencilla con Bootstrap (modal) y un botón para abrir la lista.

Requisitos:
- Node.js y npm instalados.

Instalación y uso (PowerShell en Windows):

```powershell
cd 'E:\Proyectos\Amigo Secreto'
npm install
npm run build
npm start
```
reubas
El comando `npm start` abrirá el navegador apuntando al `index.html` del proyecto.

Notas:
- Si quieres cambiar la lista de participantes edita `src/app.ts` y vuelve a ejecutar `npm run build`.
- Para reiniciar el estado (borrar asignaciones y permitir nuevas revelaciones) abre la consola del navegador y ejecuta:

```js
window.__secretSanta.reset()
```
