import express, {Request, Response} from "express";
import knex from "../../knex";

export const updateFileDetails = (req: Request, res: Response) => {
  const { fileURL } = req.body;
  let value: string;

  const getVersionValueWrapper = async () => {
    const getVersionValue = async () => {
      return knex("settings")
        .where("key", "Version")
        .then((data) => {
          return data[0].value;
        })
        .catch((error) => {
          return error;
        });
    };
    value = await getVersionValue();
  };
  getVersionValueWrapper();

  return knex("settings")
    .upsert({
      key: "FileURL",
      value: fileURL,
    })
    .then((data) => {
      knex("settings")
        .upsert({
          key: "Version",
          value: parseInt(value) + 1,
        })
        .then((data) => {
          return knex("settings")
            .then((data) => {
              return res.send(data);
            })
            .catch((error) => {
              return res.send(error);
            });
        })
        .catch((error) => {
          return res.send(error);
        });
    })
    .catch((error) => {
      return res.send(error);
    });
};
