import express from "express";
const router = express.Router();
import {fetchKey} from "../controllers/fetchKeyController";

/**
 * @swagger
 * /settings:
 *   get:
 *     tags:
 *       - Fetch Version and FileURL settings
 *     summary: Retrieve current Version and FileURL
 *     description: Endpoint to retrieve current Version and FileURL
 *     parameters: 
 *       - in: query 
 *         name: key
 *         description: To determine current version and data used in the application
 *         schema: 
 *           type: string
 *     responses:
 *       200:
 *         description: Selected Key value(s) retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       key:
 *                         type: string
 *                         description: The key.
 *                         example: Version
 *                       value:
 *                         type: string
 *                         description: The values.
 *                         example: 1
 *                 error: 
 *                   type: string   
 *                   description: The error message.
 *                   example: ""       
*/

router.route("/").get(fetchKey);

export default router;