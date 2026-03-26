const request = require('supertest');
const app = require('../server');

describe('Auth Routes', () => {
  
  describe('POST /auth/register', () => {
    it('should register a new user successfully', async () => {
      const res = await request(app)
        .post('/auth/register')
        .send({ email: 'test@test.com', senha: '123456' });

      expect(res.statusCode).toBe(201);
      expect(res.body.message).toBe('Usuário criado com sucesso');
    });

    it('should return 400 if email is invalid', async () => {
      const res = await request(app)
        .post('/auth/register')
        .send({ email: 'email-invalido', senha: '123456' });

      expect(res.statusCode).toBe(400);
    });

    it('should return 400 if password is too short', async () => {
      const res = await request(app)
        .post('/auth/register')
        .send({ email: 'test2@test.com', senha: '123' });

      expect(res.statusCode).toBe(400);
    });
  });

  describe('POST /auth/login', () => {
    it('should login and return a token', async () => {
      const res = await request(app)
        .post('/auth/login')
        .send({ email: 'test@test.com', senha: '123456' });

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('token');
    });

    it('should return 401 with wrong password', async () => {
      const res = await request(app)
        .post('/auth/login')
        .send({ email: 'test@test.com', senha: 'senhaerrada' });

      expect(res.statusCode).toBe(401);
    });
  });

});
