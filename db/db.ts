
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('utility-app.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, content TEXT NOT NULL);',
        [],
        () => {
          resolve(undefined);
        },
        (_, err) => {
          reject(err);
          return false;
        }
      );
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS games (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, score INTEGER NOT NULL);',
        [],
        () => {
          resolve(undefined);
        },
        (_, err) => {
          reject(err);
          return false;
        }
      );
    });
  });
  return promise;
};

export const insertNote = (title: string, content: string) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO notes (title, content) VALUES (?, ?);',
        [title, content],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
          return false;
        }
      );
    });
  });
  return promise;
};

export const fetchNotes = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM notes;',
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
          return false;
        }
      );
    });
  });
  return promise;
};

export const updateNote = (id: number, title: string, content: string) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE notes SET title = ?, content = ? WHERE id = ?;',
        [title, content, id],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
          return false;
        }
      );
    });
  });
  return promise;
};

export const deleteNote = (id: number) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM notes WHERE id = ?;',
        [id],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
          return false;
        }
      );
    });
  });
  return promise;
};

export const insertGame = (name: string, score: number) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO games (name, score) VALUES (?, ?);',
                [name, score],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                    return false;
                }
            );
        });
    });
    return promise;
};

export const fetchGames = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM games;',
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                    return false;
                }
            );
        });
    });
    return promise;
};

export const updateGame = (id: number, name: string, score: number) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'UPDATE games SET name = ?, score = ? WHERE id = ?;',
                [name, score, id],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                    return false;
                }
            );
        });
    });
    return promise;
};

export const deleteGame = (id: number) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM games WHERE id = ?;',
                [id],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                    return false;
                }
            );
        });
    });
    return promise;
};
