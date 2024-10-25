import express, { Request, Response } from "express";
import knex from "../../knex";

export const fetchPlaylistsByUser = (req: Request, res: Response) => {
  let { login_id } = req.query;

  return knex("playlist")
    .select("playlist_details.playlist_id", "playlist_details.playlist_name",
            "playlist_details.playlist_code", "playlist_details.tracks_count",
            "playlist_details.created_at", "playlist_details.created_by",
            "playlist_details.modified_at", "playlist_details.modified_by")
    .join("playlist_details", "playlist_details.playlist_id", "playlist.playlist_id")
    .where("playlist.login_id", login_id)
    .then((data) => {
      res.send({"data": data, "error": ""});
    })
    .catch((error) => {
      res.send({"data": "", "error": error});
    });
};