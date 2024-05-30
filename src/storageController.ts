import express from "express";
import { upload } from "./storageService";

const storageController = express.Router();

storageController.get("/", (req, res) => {
  res.render("index");
});

storageController.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send("File uploaded successfully!");
  });
});

export { storageController };
