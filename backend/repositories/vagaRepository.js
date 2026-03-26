const db = require('../database');

function buscarTodas() {
  return db.prepare('SELECT * FROM vagas').all();
}

function buscarPorId(id) {
  return db.prepare('SELECT * FROM vagas WHERE id = ?').get(id);
}

function ocupar(id, placa, modelo) {
  db.prepare('UPDATE vagas SET ocupado = 1, placa = ?, modelo = ? WHERE id = ?').run(placa, modelo, id);
  return buscarPorId(id);
}

function liberar(id) {
  db.prepare('UPDATE vagas SET ocupado = 0, placa = NULL, modelo = NULL WHERE id = ?').run(id);
  return buscarPorId(id);
}

module.exports = { buscarTodas, buscarPorId, ocupar, liberar };