import express, {Request, Response} from "express";
import knex from "../../knex";

export const fetchTracksByPlaylistID = (req: Request, res: Response) => {
  let { playlist_id } = req.query;

  if (typeof playlist_id === typeof []) {
    return knex("playlist_tracks")
        .where("playlist_id", "in", playlist_id)
        .then((data) => {
            res.send({"data": data, "error": ""});
        })
        .catch((error) => {
            res.send({"data": "", "error": error});
        });
}
else {
    return knex("playlist_tracks")
        .where("playlist_id", "in", [playlist_id])
        .then((data) => {
            res.send({"data": data, "error": ""});
        })
        .catch((error) => {
            res.send({"data": "", "error": error});
        });
}
};