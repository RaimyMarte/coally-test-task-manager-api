/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Crear una nueva tarea
 *     description: Crea una nueva tarea para el usuario autenticado.
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
 *       201:
 *         description: Tarea creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 task:
 *                   type: object
 *                   description: Información de la tarea creada
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *       400:
 *         description: Error en los datos proporcionados
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Obtener todas las tareas del usuario
 *     description: Devuelve todas las tareas asociadas al usuario autenticado. Puede filtrar por estado de finalización utilizando el parámetro `completed`.
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
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: ID de la tarea
 *                   title:
 *                     type: string
 *                     example: "Tarea importante"
 *                   description:
 *                     type: string
 *                     example: "Descripción de la tarea importante"
 *                   completed:
 *                     type: boolean
 *                     example: false
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-12-28T10:00:00Z"
 *       401:
 *         description: Usuario no autenticado
 *       500:
 *         description: Error en el servidor
 */



/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Obtener una tarea específica
 *     description: Devuelve la tarea con el ID proporcionado si pertenece al usuario autenticado.
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
 *       400:
 *         description: La tarea no existe o no pertenece al usuario
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /api/tasks/{id}:
 *   patch:
 *     summary: Actualizar una tarea
 *     description: Permite actualizar los detalles de una tarea del usuario autenticado.
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
 *       400:
 *         description: La tarea no existe o los datos proporcionados son inválidos
 *       500:
 *         description: Error en el servidor
 */


/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Eliminar una tarea
 *     description: Elimina una tarea específica del usuario autenticado.
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
 *       400:
 *         description: La tarea no existe o no pertenece al usuario
 *       500:
 *         description: Error en el servidor
 */
