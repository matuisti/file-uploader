import multer from "multer";
import path from "path";
import sanitize from "sanitize-filename";

const filesDirectory = path.join(__dirname, "../uploads");

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, filesDirectory);
  },
  filename: (_req, file, callback) => {
    const sanitizedFilename = sanitize(file.originalname)
      .replace(/ /g, "_")
      .replace(/[^\w.-]/g, "");
    callback(null, Date.now() + "_" + sanitizedFilename);
  },
});

export const upload = multer({ storage: storage }).array("files", 30);
