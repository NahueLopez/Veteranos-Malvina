# Centro de Veteranos de Guerra de Malvinas — Mar del Plata

Sitio web institucional del Centro de Veteranos de Guerra de Malvinas. El proyecto
se compone de **tres aplicaciones independientes**:

```
Malvinas/
├── frontend/     → Sitio público (React + Vite + React Router + CSS Modules)
├── backoffice/   → Panel de administración (React + Vite, rutas protegidas, JWT)
└── backend/      → API REST (.NET 8 + EF Core + PostgreSQL + JWT)
```

## Estado de la demo

El **frontend** y el **backoffice** funcionan de forma autónoma con datos locales
(JSON / store en memoria), pensados para presentar al cliente sin depender del
backend. El **backend** ya está completo (modelos, migración, CRUD, auth JWT) y se
conecta cuando se apruebe la demo.

---

## Frontend público

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
```

Páginas: Inicio (hero, cita, línea de tiempo interactiva, testimonios, galería,
noticias y eventos), Historia, Veteranos, Galería, Noticias. Los datos viven en
`src/data/*.json`.

## Backoffice (panel admin)

```bash
cd backoffice
npm install
npm run dev        # http://localhost:5174
```

Login de demo: **cualquier email y contraseña** inician sesión (token simulado en
`localStorage`). Secciones: Dashboard + ABM de Veteranos, Línea de tiempo, Noticias,
Eventos y Galería. El CRUD es genérico y se configura en `src/config/entities.js`.

## Backend (API REST)

Requisitos: **.NET 8 SDK** y **PostgreSQL**.

1. Crear la base `malvinas` en PostgreSQL.
2. Configurar `backend/appsettings.Development.json` (cadena de conexión, clave JWT,
   credenciales del admin). Este archivo está en `.gitignore`.
3. Ejecutar:

```bash
cd backend
dotnet ef database update      # aplica la migración InitialCreate
dotnet run                     # https://localhost:5xxx — Swagger en /swagger
```

Al arrancar, la API aplica migraciones y siembra el usuario admin
(`Admin:Email` / `Admin:Password`).

### Endpoints

| Recurso | GET (público) | POST/PUT/DELETE (requiere JWT) |
|---|---|---|
| `/api/auth/login` | — | `POST` devuelve el token |
| `/api/veteranos` | ✓ | ✓ |
| `/api/eventoshistoricos` | ✓ | ✓ |
| `/api/noticias` | ✓ | ✓ |
| `/api/eventos` | ✓ | ✓ |
| `/api/galeria` | ✓ | ✓ |

CORS habilitado para `http://localhost:5173` y `http://localhost:5174`.

---

## Identidad visual

Paleta patria definida (celeste `#75AADB`, azul marino `#0A2240`, fondo crema
`#F5F2EB`). La bandera celeste/blanco/celeste es elemento estructural (nav,
separadores, footer). Diseño sobrio y editorial, sin Google Fonts.

## Nota de entorno

El disco `C:` de la máquina de desarrollo suele estar lleno. La caché de npm está
redirigida a `D:/npm-cache` y la de NuGet a `D:/nuget-packages` (ver
`backend/nuget.config`).
