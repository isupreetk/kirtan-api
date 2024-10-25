import express from "express";
const router = express.Router();
import {fetchPlaylistsByUser} from "../controllers/fetchPlaylistsController";

/**
 * @swagger
 * /playlists:
 *   get:
 *     tags:
 *       - Fetch All Playlists For User
 *     summary: Retrieve a list of playlists created by the user
 *     description: Endpoint to retrieve a list of playlists corresponding to the logged in user
 *     parameters: 
 *       - in: query 
 *         name: login_id
 *         description: To get all playlists corresponding to the login_id
 *         schema: 
 *           type: string
 *     responses:
 *       200:
 *         description: Playlist(s) retrieved successfully.
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
 *                       playlist_id:
 *                         type: number
 *                         description: Playlist ID.
 *                         example: 1
 *                       playlist_name:
 *                         type: string
 *                         description: Playlist Name.
 *                         example: Test Playlist
 *                       playlist_code:
 *                         type: number
 *                         description: Playlist Code.
 *                         example: 123
 *                       tracks_count:
 *                         type: number
 *                         description: Count of Tracks in Playlist.
 *                         example: 1
 *                       created_at:
 *                         type: string
 *                         description: Date of playlist creation
 *                         example: 2024-10-09 17:06:20
 *                       created_by:
 *                         type: string
 *                         description: Logged in user name
 *                         example: Test User
 *                       modified_at:
 *                         type: string
 *                         description: Date of playlist modification
 *                         example: 2024-10-10 17:06:20
 *                       modified_by:
 *                         type: string
 *                         description: Logged in user name
 *                         example: Test User
 *                 error: 
 *                   type: string
 *                   description: The error message.
 *                   example: ""   
 */

router.route("/").get(fetchPlaylistsByUser);

export default router;
