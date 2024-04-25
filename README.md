Crit 360 - Backend

Este proyecto de se desarrolla para realizar encuestas que evalúan diferentes aspectos de los empleados de una empresa. Este repositorio constituye el backend de la aplicación, el cual está conectado con un frontend alojado en el siguiente repositorio: https://github.com/Jander1016/criteria-frontend

Este proyecto sigue la arquitectura MVC e incorpora capas adicionales para mejorar el soporte y la personalización. Realiza Login de usuarios usando encriptado y JWT, además de ofrecer un CRUD (crear, leer, actualizar, eliminar) completo para los usuarios, encuestas, preguntas, respuestas etc.

# Tecnologías y librerías

Este proyecto está construido usando las siguientes tecnologías y librerías:

- Node.js versión 20.11.0 
- TypeScript
- Express.js 
- Prisma ORM 
- PostgreSQL 
- Bcryptjs
- Tokens web JSON (JWT)

# Inicio rápido

### Clonar este repositorio

```
git clone https://github.com/Jander1016/criteria-backend.git
```

### Instalar dependencias

```
npm install
```

### Descargar pgAdmin para PostgreSQL

[PostgreSQL](https://www.postgresql.org/download/) Página de descarga

### Conectar el servidor

Establezca las variables de entorno:

- Crear un archivo _.env_ en la raíz del proyecto 
- Rellenar la URL de la base de datos

```
DATABASE_URL="postgresql://<username>:<password>@<host_name>:<port>/<database_name>?schema=public"
SECRET_KEY = "secret_key"
```

### Ejecutar el proyecto localmente

```
npm run dev
```

# Uso avanzado

### Generar el cliente Prisma

```
npx prisma generate
```

### Migrar base de datos con Prisma

```
npx prisma migrate dev
```

### Iniciar el servidor

```
npm run start
```
Su servidor Express ahora se ejecutará en el puerto 3200 (si no se ha especificado nada en el archivo .env se ejecuta en este puerto por defecto). Puede visitar http://localhost:3200 en su navegador web para verificar que el servidor esté funcionando.







