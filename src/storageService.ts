import multer from "multer";

const dir = "./uploads";

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, dir);
  },
  filename: (_req, file, callback) => {
    callback(null, file.originalname);
  },
});

export const upload = multer({ storage: storage }).array("files", 12);
