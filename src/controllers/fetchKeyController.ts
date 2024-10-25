import express, {Request, Response} from "express";
import knex from "../../knex";

export const fetchKey = (req: Request, res: Response) => {
  let searchParams = req.query;

  let searchParamsKey;

  if (typeof searchParams.key === typeof []) {
    searchParamsKey = searchParams.key;
  } else {
    searchParamsKey = [searchParams.key];
  }

  return knex("settings")
    .where("key", "in", searchParamsKey)
    .then((data) => {
      return res.send({ "data": data, "error": "" });
    })
    .catch((error) => {
      return res.send({ "data": "", "error": error });
    });
};
