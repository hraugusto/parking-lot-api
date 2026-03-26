const vagaService = require('../services/vagaService');

function buscarTodas(req, res) {
  const vagas = vagaService.buscarTodas();
  res.status(200).json(vagas);
}

function buscarPorId(req, res) {
  try {
    const id = parseInt(req.params.id);
    const vaga = vagaService.buscarPorId(id);
    res.status(200).json(vaga);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

function estacionar(req, res) {
  try {
    const id = parseInt(req.params.id);
    const { placa, modelo } = req.body;
    const vaga = vagaService.estacionar(id, placa, modelo);
    res.status(200).json(vaga);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

function liberar(req, res) {
  try {
    const id = parseInt(req.params.id);
    const vaga = vagaService.liberar(id);
    res.status(200).json(vaga);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { buscarTodas, buscarPorId, estacionar, liberar };