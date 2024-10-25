import express, {Request, Response} from "express";
import knex from "../../knex";

export const fetchKey = (req: Request, res: Response) => {
  let searchParams = req.query;

  if (typeof searchParams.key === typeof []) {
    return knex("settings")
      .where("key", "in", searchParams.key)
      .then((data) => {
        res.send({"data": data, "error": ""});
      })
      .catch((error) => {
        // return res.send(error);
        res.send({"data": "", "error": error});
      });
  } else {
    return knex("settings")
      .where("key", "in", [searchParams.key])
      .then((data) => {
        res.send({"data": data, "error": ""});
      })
      .catch((error) => {
        res.send({"data": "", "error": error});
      });
  }
};
