# Backend de Sistema de Estacionamento

Este é um backend simples para um sistema de estacionamento com 20 vagas, construído com Node.js e Express.

## Instalação

1. Navegue para a pasta do projeto:
   ```
   cd backend
   ```

2. Instale as dependências:
   ```
   npm install
   ```

## Executando o Servidor

Para iniciar o servidor:
```
npm start
```

O servidor será executado em `http://localhost:3000`.

## Endpoints da API

### GET /vagas
Retorna todas as vagas de estacionamento (1 a 20), mostrando se estão ocupadas e os detalhes do veículo.

### GET /vagas/:id
Retorna os detalhes de uma vaga específica (id de 1 a 20).

### POST /vagas/:id
Estaciona um veículo em uma vaga específica. Corpo da requisição:
```json
{
  "placa": "ABC-1234",
  "modelo": "Fusca"
}
```
Retorna erro se a vaga já estiver ocupada ou se placa/modelo não forem fornecidos.

### DELETE /vagas/:id
Remove o veículo de uma vaga específica, deixando-a vazia.

## Exemplo de Uso

Você pode usar ferramentas como Postman ou curl para testar a API.

Exemplo com curl para estacionar um veículo na vaga 1:
```
curl -X POST http://localhost:3000/vagas/1 -H "Content-Type: application/json" -d '{"placa":"ABC-1234","modelo":"Fusca"}'
```

Exemplo para remover:
```
curl -X DELETE http://localhost:3000/vagas/1
```