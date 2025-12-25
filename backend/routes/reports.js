import express from "express";
import multer from "multer";
import { auth } from "../middleware/auth.js";
import { db } from "../database/db.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", auth, upload.single("file"), (req, res) => {
  db.run(
    "INSERT INTO reports (user_id,type,date,file_path) VALUES (?,?,?,?)",
    [req.user.id, req.body.type, req.body.date, req.file.path],
    () => res.json({ message: "Report uploaded" })
  );
});

router.get("/", auth, (req, res) => {
  db.all("SELECT * FROM reports WHERE user_id=?", [req.user.id],
    (_, rows) => res.json(rows)
  );
});

export default router;
