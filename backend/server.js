require('dotenv').config();

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const app = express();
const port = process.env.PORT || 3000;

const vagaRoutes = require('./routes/vagaRoutes');
const authRoutes = require('./routes/authRoutes');
const autenticar = require('./middlewares/authMiddleware');

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Parking Lot API</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', sans-serif; background: #0f0f0f; color: #fff; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
        .container { max-width: 600px; width: 90%; }
        h1 { font-size: 2rem; margin-bottom: 0.5rem; }
        h1 span { color: #7c3aed; }
        .badge { display: inline-block; background: #1a1a1a; border: 1px solid #333; padding: 4px 12px; border-radius: 999px; font-size: 0.75rem; color: #aaa; margin-bottom: 2rem; }
        .section { margin-bottom: 1.5rem; }
        .section h2 { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #7c3aed; margin-bottom: 0.75rem; }
        .endpoint { display: flex; align-items: center; gap: 0.75rem; padding: 0.6rem 1rem; background: #1a1a1a; border-radius: 8px; margin-bottom: 0.5rem; font-size: 0.875rem; }
        .method { font-weight: bold; font-size: 0.75rem; padding: 2px 8px; border-radius: 4px; min-width: 60px; text-align: center; }
        .get { background: #064e3b; color: #34d399; }
        .post { background: #1e3a5f; color: #60a5fa; }
        .delete { background: #450a0a; color: #f87171; }
        .lock { color: #7c3aed; font-size: 0.75rem; margin-left: auto; }
        .footer { margin-top: 2rem; font-size: 0.75rem; color: #555; }
        .footer a { color: #7c3aed; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🅿️ Parking <span>Lot API</span></h1>
        <div class="badge">v1.0.0 · live</div>

        <div class="section">
          <h2>Auth</h2>
          <div class="endpoint"><span class="method post">POST</span> /auth/register</div>
          <div class="endpoint"><span class="method post">POST</span> /auth/login</div>
        </div>

        <div class="section">
          <h2>Vagas</h2>
          <div class="endpoint"><span class="method get">GET</span> /vagas <span class="lock">🔒 JWT</span></div>
          <div class="endpoint"><span class="method get">GET</span> /vagas/:id <span class="lock">🔒 JWT</span></div>
          <div class="endpoint"><span class="method post">POST</span> /vagas/:id <span class="lock">🔒 JWT</span></div>
          <div class="endpoint"><span class="method delete">DEL</span> /vagas/:id <span class="lock">🔒 JWT</span></div>
        </div>

        <div class="section">
          <h2>Docs</h2>
          <div class="endpoint"><span class="method get">GET</span> <a href="/api-docs" style="color:#7c3aed">/api-docs</a></div>
        </div>

        <div class="footer">
          Built by <a href="https://github.com/hraugusto" target="_blank">@hraugusto</a> · 
          <a href="https://github.com/hraugusto/parking-lot-api" target="_blank">Source code</a>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/auth', authRoutes);
app.use('/vagas', autenticar, vagaRoutes);

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
}

module.exports = app;