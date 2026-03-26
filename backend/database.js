const Database = require('better-sqlite3');
const db = new Database('parking.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS vagas (
    id INTEGER PRIMARY KEY,
    ocupado INTEGER NOT NULL DEFAULT 0,
    placa TEXT,
    modelo TEXT
  )
`);

// Inicializa as 20 vagas se a tabela estiver vazia
const count = db.prepare('SELECT COUNT(*) as total FROM vagas').get();
if (count.total === 0) {
  const insert = db.prepare('INSERT INTO vagas (id, ocupado, placa, modelo) VALUES (?, 0, NULL, NULL)');
  for (let i = 1; i <= 20; i++) {
    insert.run(i);
  }
}

module.exports = db;
