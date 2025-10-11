
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('utility-app.db');

export const init = () => {
  db.execSync(
    'CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, content TEXT NOT NULL);'
  );
  db.execSync(
    'CREATE TABLE IF NOT EXISTS games (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, score INTEGER NOT NULL);'
  );
};

export const insertNote = (title: string, content: string) => {
  return db.runSync('INSERT INTO notes (title, content) VALUES (?, ?);', title, content);
};

export const fetchNotes = () => {
  return db.getAllSync('SELECT * FROM notes;');
};

export const updateNote = (id: number, title: string, content: string) => {
  return db.runSync('UPDATE notes SET title = ?, content = ? WHERE id = ?;', title, content, id);
};

export const deleteNote = (id: number) => {
  return db.runSync('DELETE FROM notes WHERE id = ?;', id);
};

export const insertGame = (name: string, score: number) => {
  return db.runSync('INSERT INTO games (name, score) VALUES (?, ?);', name, score);
};

export const fetchGames = () => {
  return db.getAllSync('SELECT * FROM games;');
};

export const updateGame = (id: number, name: string, score: number) => {
  return db.runSync('UPDATE games SET name = ?, score = ? WHERE id = ?;', name, score, id);
};

export const deleteGame = (id: number) => {
  return db.runSync('DELETE FROM games WHERE id = ?;', id);
};
