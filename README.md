# Movies App Monorepo

Este repositorio contiene dos paquetes manejados con Bun Workspaces:

- frontend: app Preact + Vite
- server: API Node/Express + TRPC + Drizzle

## Requisitos
- Bun instalado

## Scripts principales (desde la raíz)

- dev: levanta backend y frontend a la vez
- dev:fe: solo frontend
- dev:be: solo backend
- build: construye ambos paquetes
- test: ejecuta tests de ambos paquetes
- lint / format: linter/formateo en ambos paquetes

## Uso

```bash
bun install        # instala dependencias de todos los workspaces
bun run dev        # backend + frontend
bun run dev:fe     # solo frontend
bun run dev:be     # solo backend
bun run build      # build de ambos
bun run test       # tests de ambos
```

## Estructura

```
frontend/
server/
```

Cada paquete mantiene su propia configuración (tsconfig, linter, etc.).
