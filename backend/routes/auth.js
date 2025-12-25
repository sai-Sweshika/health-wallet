import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../database/db.js";

const router = express.Router();

router.post("/register", (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 10);
  db.run(
    "INSERT INTO users (name,email,password) VALUES (?,?,?)",
    [req.body.name, req.body.email, hash],
    err => err ? res.json(err) : res.json({ message: "Registered" })
  );
});

router.post("/login", (req, res) => {
  db.get("SELECT * FROM users WHERE email=?", [req.body.email], (err, user) => {
    if (!user || !bcrypt.compareSync(req.body.password, user.password))
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.json({ token });
  });
});

export default router;
