/**
 * @swagger
 * tags:
 *   - name: Autenticación
 *     description: Métodos para registrar, iniciar sesión, cerrar sesión y verificar autenticación
 */

/**
 * @swagger
 * /api/auth/sign-up:
 *   post:
 *     summary: Crear un nuevo usuario
 *     description: Registra un nuevo usuario con la información proporcionada.
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Juan Perez
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: Password123
 *               confirmPassword:
 *                 type: string
 *                 example: Password123
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isSuccess:
 *                   type: boolean
 *                   description: Indica si la solicitud fue exitosa
 *                   example: true
 *                 message:
 *                   type: string
 *                   description: Mensaje que describe el estado de la solicitud
 *                   example: "Usuario creado exitosamente."
 *                 title:
 *                   type: string
 *                   description: Título de la respuesta.
 *                   example: "Éxito"
 *                 statusCode:
 *                   type: integer
 *                   description: Código de estado HTTP
 *                   example: 200
 *                 data:
 *                   type: object
 *                   description: Información del usuario registrado
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "60c72b2f5f1b2c001f8d2e9a"
 *                     name:
 *                       type: string
 *                       example: "Juan Perez"
 *                     email:
 *                       type: string
 *                       example: "user@example.com"
 *       400:
 *         description: Datos inválidos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isSuccess:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Los datos proporcionados son inválidos."
 *                 statusCode:
 *                   type: integer
 *                   example: 400
 *                 title:
 *                   type: string
 *                   example: "Error"
 *                 data:
 *                   example: null
 *       500:
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Ocurrió un error en el servidor, intente más tarde."
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     description: Permite a un usuario iniciar sesión con sus credenciales.
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: Password123
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isSuccess:
 *                   type: boolean
 *                   description: Indica si la solicitud fue exitosa
 *                   example: true
 *                 message:
 *                   type: string
 *                   description: Mensaje que describe el estado de la solicitud
 *                   example: "Inicio de sesión exitoso."
 *                 title:
 *                   type: string
 *                   description: Título de la respuesta.
 *                   example: "Éxito"
 *                 statusCode:
 *                   type: integer
 *                   description: Código de estado HTTP
 *                   example: 200
 *                 data:
 *                   type: object
 *                   description: Información del usuario y el token de autenticación
 *                   properties:
 *                     user:
 *                       type: object
 *                       description: Datos del usuario autenticado
 *                       properties:
 *                         _id:
 *                           type: string
 *                           example: "60c72b2f5f1b2c001f8d2e9a"
 *                         name:
 *                           type: string
 *                           example: "Juan Perez"
 *                         email:
 *                           type: string
 *                           example: "user@example.com"
 *                     token:
 *                       type: string
 *                       description: Token de autenticación generado
 *                       example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       401:
 *         description: Credenciales incorrectas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isSuccess:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Credenciales incorrectas."
 *                 statusCode:
 *                   type: integer
 *                   example: 401
 *                 title:
 *                   type: string
 *                   example: "Error de autenticación"
 *                 data:
 *                   example: null
 *       500:
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Ocurrió un error en el servidor, intente más tarde."
 */

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Cerrar sesión
 *     description: Permite al usuario cerrar sesión invalidando su token.
 *     tags: [Autenticación]
 *     responses:
 *       200:
 *         description: Cierre de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isSuccess:
 *                   type: boolean
 *                   description: Indica si la solicitud fue exitosa
 *                   example: true
 *                 message:
 *                   type: string
 *                   description: Mensaje que describe el estado de la solicitud
 *                   example: "Cierre de sesión exitoso."
 *                 title:
 *                   type: string
 *                   description: Título de la respuesta.
 *                   example: "Éxito"
 *                 statusCode:
 *                   type: integer
 *                   description: Código de estado HTTP
 *                   example: 200
 *       401:
 *         description: Usuario no autenticado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isSuccess:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "No se encontró un usuario autenticado."
 *                 statusCode:
 *                   type: integer
 *                   example: 401
 *                 title:
 *                   type: string
 *                   example: "Error de autenticación"
 *                 data:
 *                   example: null
 *       500:
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Ocurrió un error en el servidor, intente más tarde."
 */

/**
 * @swagger
 * /api/auth/check-auth:
 *   get:
 *     summary: Verificar autenticación del usuario
 *     description: Permite verificar si un usuario está autenticado, utilizando el token de acceso.
 *     tags: [Autenticación]
 *     responses:
 *       200:
 *         description: Autenticación verificada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isSuccess:
 *                   type: boolean
 *                   description: Estado de la respuesta, indicando si la acción fue exitosa.
 *                   example: true
 *                 message:
 *                   type: string
 *                   description: Mensaje de respuesta.
 *                   example: "Autenticación verificada correctamente."
 *                 statusCode:
 *                   type: integer
 *                   description: Código de estado HTTP.
 *                   example: 200
 *                 title:
 *                   type: string
 *                   description: Título de la respuesta.
 *                   example: "Éxito"
 *                 data:
 *                   type: object
 *                   description: Datos del usuario autenticado y su token
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "60c72b2f5f1b2c001f8d2e9a"
 *                     name:
 *                       type: string
 *                       example: "Juan Perez"
 *                     email:
 *                       type: string
 *                       example: "user@example.com"
 *       401:
 *         description: No autenticado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isSuccess:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "No se ha encontrado un usuario autenticado."
 *                 statusCode:
 *                   type: integer
 *                   example: 401
 *                 title:
 *                   type: string
 *                   example: "Error de autenticación"
 *                 data:
 *                   example: null
 *       500:
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Ocurrió un error en el servidor, intente más tarde."
 */
