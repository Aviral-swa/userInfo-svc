import { Router } from 'express';
import { validationHandler } from '../../libs/utilities';
import homeController from './UserInfoController';
import validation from './validation';

const router = Router();

/**
 * @swagger
 * /homes:
 *   get:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Home
 *     description: Returns all Home names
 *     parameters:
 *       - in: query
 *         name: limit
 *         required: true
 *         type: string
 *       - in: query
 *         name: skip
 *         required: true
 *         type: integer
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of Home
 *         schema:
 *           $ref: '#/definitions/HomeArraySuccess'
 */
router.route('/')
 .get(
   homeController.getUserInfo,
 );

export default router;
