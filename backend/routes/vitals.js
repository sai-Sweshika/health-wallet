import express from "express";
import { auth } from "../middleware/auth.js";
import { db } from "../database/db.js";

const router = express.Router();

router.post("/", auth, (req, res) => {
  db.run(
    "INSERT INTO vitals (user_id,type,value,recorded_at) VALUES (?,?,?,?)",
    [req.user.id, req.body.type, req.body.value, req.body.date],
    () => res.json({ message: "Vitals added" })
  );
});

router.get("/", auth, (req, res) => {
  db.all("SELECT * FROM vitals WHERE user_id=?", [req.user.id],
    (_, rows) => res.json(rows)
  );
});

export default router;
