require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const vagaRoutes = require('./routes/vagaRoutes');
const authRoutes = require('./routes/authRoutes');
const autenticar = require('./middlewares/authMiddleware');

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Parking Lot API',
    version: '1.0.0',
    endpoints: {
      auth: {
        register: 'POST /auth/register',
        login: 'POST /auth/login'
      },
      vagas: {
        listar: 'GET /vagas',
        buscar: 'GET /vagas/:id',
        estacionar: 'POST /vagas/:id',
        liberar: 'DELETE /vagas/:id'
      }
    }
  });
});

app.use('/auth', authRoutes);
app.use('/vagas', autenticar, vagaRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});