/**
 * @swagger
 * tags:
 *   - name: Tareas
 *     description: Métodos para crear, leer, editar y eliminar tareas
 */


/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Crear una nueva tarea
 *     description: Crea una nueva tarea para el usuario autenticado.
 *     tags: [Tareas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Tarea importante"
 *               description:
 *                 type: string
 *                 example: "Descripción de la tarea importante"
 *               completed:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       200:
 *         description: Tarea creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isSuccess:
 *                   type: boolean
 *                   description: Indica si la tarea fue creada exitosamente
 *                   example: true
 *                 message:
 *                   type: string
 *                   description: Mensaje que describe el estado de la solicitud
 *                   example: "Tarea creada con éxito."
 *                 title:
 *                   type: string
 *                   description: Título de la respuesta
 *                   example: "Éxito"
 *                 statusCode:
 *                   type: integer
 *                   description: Código de estado HTTP
 *                   example: 200
 *                 data:
 *                   type: object
 *                   description: Información de la tarea creada
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "60d6f479f28b5a001f8f3d87"
 *                     title:
 *                       type: string
 *                       example: "Tarea importante"
 *                     description:
 *                       type: string
 *                       example: "Descripción de la tarea importante"
 *                     completed:
 *                       type: boolean
 *                       example: false
 *       400:
 *         description: Error en los datos proporcionados
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
 *                   example: "Error en los datos"
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
 * /api/tasks:
 *   get:
 *     summary: Obtener todas las tareas del usuario
 *     description: Devuelve todas las tareas asociadas al usuario autenticado. Puede filtrar por estado de finalización utilizando el parámetro `completed`.
 *     tags: [Tareas]  
 *     parameters:
 *       - in: query
 *         name: completed
 *         required: false
 *         description: Filtra las tareas por estado de finalización. Puede ser 'true', 'false' o 'all' para obtener todas las tareas sin importar su estado de finalización.
 *         schema:
 *           type: string
 *           enum: [true, false, all]
 *           example: all
 *     responses:
 *       200:
 *         description: Lista de tareas del usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isSuccess:
 *                   type: boolean
 *                   description: Indica si la lista de tareas fue obtenida exitosamente
 *                   example: true
 *                 message:
 *                   type: string
 *                   description: Mensaje que describe el estado de la solicitud
 *                   example: "Acción realizada exitosamente"
 *                 title:
 *                   type: string
 *                   description: Título de la respuesta
 *                   example: "Éxito"
 *                 statusCode:
 *                   type: integer
 *                   description: Código de estado HTTP
 *                   example: 200
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: ID de la tarea
 *                       title:
 *                         type: string
 *                         example: "Tarea importante"
 *                       description:
 *                         type: string
 *                         example: "Descripción de la tarea importante"
 *                       completed:
 *                         type: boolean
 *                         example: false
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-12-28T10:00:00Z"
 *                       lastUpdatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-12-28T10:00:00Z"
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


/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Obtener una tarea específica
 *     description: Devuelve la tarea con el ID proporcionado si pertenece al usuario autenticado.
 *     tags: [Tareas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la tarea a obtener
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Información de la tarea
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isSuccess:
 *                   type: boolean
 *                   description: Indica si la Información de la tarea fue obtenida exitosamente
 *                   example: true
 *                 message:
 *                   type: string
 *                   description: Mensaje que describe el estado de la solicitud
 *                   example: "Acción realizada exitosamente"
 *                 title:
 *                   type: string
 *                   description: Título de la respuesta
 *                   example: "Éxito"
 *                 statusCode:
 *                   type: integer
 *                   description: Código de estado HTTP
 *                   example: 200
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: ID de la tarea
 *                     title:
 *                       type: string
 *                       example: "Tarea importante"
 *                     description:
 *                       type: string
 *                       example: "Descripción de la tarea importante"
 *                     completed:
 *                       type: boolean
 *                       example: false
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-12-28T10:00:00Z"
 *                     lastUpdatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-12-28T10:00:00Z"
 *       400:
 *         description: La tarea no existe o no pertenece al usuario
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
 *                   example: "La tarea solicitada no existe o no pertenece al usuario."
 *                 statusCode:
 *                   type: integer
 *                   example: 400
 *                 title:
 *                   type: string
 *                   example: "Error en la tarea"
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
 * /api/tasks/{id}:
 *   patch:
 *     summary: Actualizar una tarea
 *     description: Permite actualizar los detalles de una tarea del usuario autenticado.
 *     tags: [Tareas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la tarea a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Tarea actualizada"
 *               description:
 *                 type: string
 *                 example: "Descripción de la tarea actualizada"
 *               completed:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Tarea actualizada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isSuccess:
 *                   type: boolean
 *                   description: Indica si la tarea fue actualizada exitosamente
 *                   example: true
 *                 message:
 *                   type: string
 *                   description: Mensaje que describe el estado de la solicitud
 *                   example: "Tarea actualizada con éxito"
 *                 title:
 *                   type: string
 *                   description: Título de la respuesta
 *                   example: "Éxito"
 *                 statusCode:
 *                   type: integer
 *                   description: Código de estado HTTP
 *                   example: 200
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: ID de la tarea
 *                     title:
 *                       type: string
 *                       example: "Tarea importante"
 *                     description:
 *                       type: string
 *                       example: "Descripción de la tarea importante"
 *                     completed:
 *                       type: boolean
 *                       example: false
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-12-28T10:00:00Z"
 *                     lastUpdatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-12-28T10:00:00Z"
 *       400:
 *         description: La tarea no existe o los datos proporcionados son inválidos
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
 *                   example: "La tarea no existe o los datos proporcionados son inválidos."
 *                 statusCode:
 *                   type: integer
 *                   example: 400
 *                 title:
 *                   type: string
 *                   example: "Error de actualización"
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
 * /api/tasks/{id}:
 *   delete:
 *     summary: Eliminar una tarea
 *     description: Elimina una tarea específica del usuario autenticado.
 *     tags: [Tareas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la tarea a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarea eliminada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isSuccess:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Tarea eliminada con éxito."
 *                 title:
 *                   type: string
 *                   example: "Éxito"
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   example: null
 *       400:
 *         description: La tarea no existe o no pertenece al usuario
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
 *                   example: "La tarea solicitada no existe o no pertenece al usuario."
 *                 statusCode:
 *                   type: integer
 *                   example: 400
 *                 title:
 *                   type: string
 *                   example: "Error en la eliminación"
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
