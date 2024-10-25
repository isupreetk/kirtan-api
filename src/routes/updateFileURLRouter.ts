import express from "express";
const router = express.Router();
import {updateFileDetails} from "../controllers/updateFileURLController";

/**
 * @swagger
 * /updateFileURL: 
 *   post:
 *     tags:
 *       - Update File URL
 *     summary: Update a new file URL
 *     description: Endpoint to update the file URL
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fileURL: 
 *                 type: string
 *                 example: "https://example.com/newfile"
 *                 description: The new file URL to be updated
 *     responses:
 *       201:
 *         description: URL successfully updated.
 *       400:
 *         description: Invalid URL provided.
 */

router.route("/").post(updateFileDetails);

export default router;
