let vagas = [];
for (let i = 1; i <= 20; i++) {
  vagas.push({ id: i, ocupado: false, placa: null, modelo: null });
}

function buscarTodas() {
  return vagas;
}

function buscarPorId(id) {
  return vagas.find(v => v.id === id);
}

function ocupar(id, placa, modelo) {
  const vaga = vagas.find(v => v.id === id);
  vaga.ocupado = true;
  vaga.placa = placa;
  vaga.modelo = modelo;
  return vaga;
}

function liberar(id) {
  const vaga = vagas.find(v => v.id === id);
  vaga.ocupado = false;
  vaga.placa = null;
  vaga.modelo = null;
  return vaga;
}

module.exports = { buscarTodas, buscarPorId, ocupar, liberar };