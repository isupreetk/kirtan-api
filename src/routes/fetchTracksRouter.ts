import express from "express";
const router = express.Router();
import {fetchTracksByPlaylistID} from "../controllers/fetchTracksController";

/**
 * @swagger
 * /tracks:
 *   get:
 *     tags:
 *       - Fetch Tracks By Playlist ID
 *     summary: Retrieve a list of tracks from the passed playlist ID(s)
 *     description: Endpoint to retrieve a list of tracks in a single or multiple playlist ID(s)
 *     parameters: 
 *       - in: query 
 *         name: playlist_id
 *         description: To get all tracks corresponding to the playlist_id
 *         schema: 
 *           type: number
 *     responses:
 *       200:
 *         description: Tracks retrieved successfully.
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
 *                       track_id:
 *                         type: number
 *                         description: Track ID.
 *                         example: 1
 *                       added_on:
 *                         type: timestamp
 *                         description: Date the track was added on
 *                         example: 2024-10-09 17:06:20
 *                       created_at:
 *                         type: string
 *                         description: Date of playlist creation
 *                         example: 2024-10-09 17:06:20
 *                       created_by:
 *                         type: string
 *                         description: Logged in user name
 *                         example: Test User
 *                       deleted_ind:
 *                         type: string
 *                         description: Indication of track present or deleted from playlist
 *                         example: Y
 *                       deleted_at:
 *                         type: string
 *                         description: Timestamp of track deletion
 *                         example: 2024-10-10 17:06:20
 *                       deleted_by:
 *                         type: string
 *                         description: Username of person who deleted track from playlist
 *                         example: Test User
 *                 error: 
 *                   type: string  
 *                   description: The error message.
 *                   example: ""           
 */

router.route("/").get(fetchTracksByPlaylistID);

export default router;
