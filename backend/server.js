const express = require('express');
const app = express();
const port = 3000;

const vagaRoutes = require('./routes/vagaRoutes');

app.use(express.json());
app.use('/vagas', vagaRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});