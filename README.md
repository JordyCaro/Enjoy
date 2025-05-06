# Enjoy App - Plataforma de apoyo emocional

Este proyecto contiene tanto el frontend como el backend de la aplicación Enjoy, una plataforma para apoyo emocional, chat con IA y recursos de salud mental.

## Estructura del Proyecto

El proyecto está organizado en dos carpetas principales:

- `frontend/`: Aplicación Angular con TailwindCSS
- `backend/`: API REST con NestJS y PostgreSQL

## Requisitos

- Node.js (v18 o superior)
- PostgreSQL
- Angular CLI

## Configuración del Entorno

### Frontend (Angular)

1. Navegar a la carpeta de frontend:
```bash
cd frontend
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm start
```

La aplicación estará disponible en: http://localhost:4200

### Backend (NestJS)

1. Navegar a la carpeta de backend:
```bash
cd backend
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar PostgreSQL:
```bash
# Instalar PostgreSQL en Ubuntu
sudo apt update
sudo apt install postgresql postgresql-contrib

# Acceder al cliente de PostgreSQL
sudo -u postgres psql

# Crear una base de datos y un usuario
CREATE DATABASE "enjoy-app";
CREATE USER postgres WITH ENCRYPTED PASSWORD 'postgres';
GRANT ALL PRIVILEGES ON DATABASE "enjoy-app" TO postgres;
\q
```

4. Configurar variables de entorno:
   - Renombrar `.env.example` a `.env` (o usar las variables existentes)
   - Modificar las variables según sea necesario

5. Iniciar el servidor de desarrollo:
```bash
npm run start:dev
```

La API estará disponible en: http://localhost:3000/api

## Características Principales

### Frontend
- Autenticación de usuarios
- Chat con IA (Mia)
- Recursos de salud mental
- Comunidad y foros
- Perfiles de terapeutas

### Backend
- API RESTful con NestJS
- Autenticación JWT
- Base de datos PostgreSQL
- WebSockets para chat en tiempo real
- Validación de datos

## Despliegue en la Nube

### Opción 1: Render.com

1. **Base de datos PostgreSQL**:
   - Crear un nuevo servicio de PostgreSQL en Render
   - Anotar los detalles de conexión (host, puerto, usuario, contraseña)

2. **Backend (NestJS)**:
   - Crear un nuevo servicio web en Render
   - Conectar con tu repositorio de GitHub
   - Seleccionar la carpeta del backend
   - Configurar variables de entorno (usar los datos del servicio PostgreSQL)
   - Buildcommand: `npm install && npm run build`
   - Start command: `npm run start:prod`

3. **Frontend (Angular)**:
   - Crear un nuevo servicio de sitio estático en Render
   - Conectar con tu repositorio de GitHub
   - Buildcommand: `cd frontend && npm install && npm run build`
   - Publicar directorio: `frontend/dist/enjoy-app`
   - Configurar la URL del backend en el entorno de producción

### Opción 2: Railway.app

1. **Base de datos PostgreSQL**:
   - Agregar un nuevo servicio de PostgreSQL
   - Railway proporcionará automáticamente las variables de conexión

2. **Backend**:
   - Subir el código a un repositorio de GitHub
   - Crear un nuevo servicio en Railway conectado a tu repositorio
   - Configurar las variables de entorno
   - Configurar el directorio de trabajo como `backend`

3. **Frontend**:
   - Crear otro servicio para el frontend
   - Configurar el directorio de trabajo como `frontend`
   - Configurar el comando de construcción y inicio

### Opción 3: Fly.io

1. **Base de datos**:
   - Crear un volumen para PostgreSQL: `fly volumes create postgres_data`
   - Lanzar PostgreSQL: `fly postgres create`

2. **Backend**:
   - Crear un archivo `fly.toml` en la carpeta backend
   - Configurar el backend: `fly launch --name enjoy-backend`
   - Configurar secretos: `fly secrets set DB_HOST=...`

3. **Frontend**:
   - Configurar el frontend: `fly launch --name enjoy-frontend`
   - Construir y desplegar: `fly deploy`

## Equipo de Desarrollo

- Jordy - Desarrollador Full Stack 