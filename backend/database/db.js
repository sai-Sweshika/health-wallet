import Database from "better-sqlite3";

export const db = new Database("healthwallet.db");

// USERS TABLE
db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT
  )
`).run();

// REPORTS TABLE
db.prepare(`
  CREATE TABLE IF NOT EXISTS reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    type TEXT,
    date TEXT,
    file_path TEXT
  )
`).run();

// VITALS TABLE
db.prepare(`
  CREATE TABLE IF NOT EXISTS vitals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    type TEXT,
    value TEXT,
    recorded_at TEXT
  )
`).run();
