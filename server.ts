import express from "express";
import keyFetchingRoute from "./src/routes/fetchKeyRouter";
import updateFileURLRoute from "./src/routes/updateFileURLRouter";
import fetchPlaylistsRoute from "./src/routes/fetchPlaylistsRouter";
import fetchTracksRoute from "./src/routes/fetchTracksRouter";

export const routes = express.Router();

routes.use("/settings", keyFetchingRoute);
routes.use("/updateFileURL", updateFileURLRoute);
routes.use("/playlists", fetchPlaylistsRoute);
routes.use("/tracks", fetchTracksRoute);