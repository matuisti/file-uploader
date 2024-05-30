import express from "express";
import path from "path";
import { upload } from "./storageService";
import { storageController } from "./storageController";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("", storageController);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
