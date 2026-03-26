const vagaRepository = require('../repositories/vagaRepository');

function buscarTodas(page, limit) {
  return vagaRepository.buscarTodas(page, limit);
}

function buscarPorId(id) {
  const vaga = vagaRepository.buscarPorId(id);
  if (!vaga) throw new Error('Vaga não encontrada');
  return vaga;
}

function estacionar(id, placa, modelo) {
  const vaga = vagaRepository.buscarPorId(id);
  if (!vaga) throw new Error('Vaga não encontrada');
  if (vaga.ocupado) throw new Error('Vaga já ocupada');
  if (!placa || !modelo) throw new Error('Placa e modelo são obrigatórios');
  return vagaRepository.ocupar(id, placa, modelo);
}

function liberar(id) {
  const vaga = vagaRepository.buscarPorId(id);
  if (!vaga) throw new Error('Vaga não encontrada');
  if (!vaga.ocupado) throw new Error('Vaga já está vazia');
  return vagaRepository.liberar(id);
}

module.exports = { buscarTodas, buscarPorId, estacionar, liberar };