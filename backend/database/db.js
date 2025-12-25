import sqlite3 from "sqlite3";

export const db = new sqlite3.Database("healthwallet.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS reports (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    type TEXT,
    date TEXT,
    file_path TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS vitals (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    type TEXT,
    value TEXT,
    recorded_at TEXT
  )`);
});
