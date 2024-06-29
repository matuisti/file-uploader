import express from "express";
import fs from "fs";
import path from "path";
import { upload } from "./storageService";

const storageController = express.Router();
const filesDirectory = path.join(__dirname, "../uploads");

storageController.get("/", (req, res) => {
  res.render("index");
});

storageController.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err.message);
    }
    res.send("File uploaded successfully!");
  });
});

storageController.get("/files", (req, res) => {
  fs.readdir(filesDirectory, (err, files) => {
    if (err) {
      console.error("Error reading files directory:", err);
      return res.status(500).send("Internal Server Error");
    }

    const fileList = files
      .map((file) => ({
        name: file,
        url: `/uploads/${file}`,
      }))
      .reverse();

    res.json(fileList);
  });
});

storageController.get("/uploads/:filename", (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(filesDirectory, filename);

  fs.access(filepath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send("File not found");
    }

    res.sendFile(filepath);
  });
});

export { storageController };
