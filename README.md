# Proyecto Node.js

Este es una api de gestión de tareas realizado en NodeJs. Incluye ejemplos de rutas, configuración de base de datos y documentación con Swagger para la API.

## Requisitos

- [Node.js](https://nodejs.org/) (recomendado: LTS)
- [npm](https://www.npmjs.com/) (generalmente se instala con Node.js)

## Instrucciones de instalación

### 1. Clonar el repositorio

Primero, clona el repositorio en tu máquina local:

git clone https://github.com/RaimyMarte/coally-test-task-manager-api.git

cd coally-test-task-manager-api

### 2. Instalar las dependencias

Instala las dependencias necesarias utilizando npm:

npm install

Esto instalará todos los paquetes listados en el archivo package.json.

### 3. Configuración de entorno

Asegúrate de tener un archivo .env en la raíz de tu proyecto. Este archivo debe contener las siguientes variables de entorno, entre otras, según tu configuración:

API_KEY=f4a6594f-ae969f98c674

DB_CONFIG_URL=mongodb+srv://raimy241:oBXEHF1RVgaeAD5X@task-manager.m3aqm.mongodb.net/

SECRET_JWT_KEY=1go8ayf48lk02s0b5

PORT=3010

API_URL=http://localhost:3010

### 4. Iniciar el servidor

Para iniciar el servidor de desarrollo, utiliza el siguiente comando:

npm run dev

Esto ejecutará el servidor en el puerto que hayas configurado en el archivo .env.

### 5. Documentación de la API con Swagger

Este proyecto incluye Swagger para documentar la API. Una vez que el servidor esté en funcionamiento, puedes acceder a la documentación de la API en la siguiente URL:

http://localhost:3010/api-docs