const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Defina uma rota para o painel
app.get('/painel', (req, res) => {
  res.sendFile(__dirname + '/painel.html');
});

// Quando um cliente se conecta, configure as ações de comunicação
io.on('connection', (socket) => {
  console.log('Um cliente se conectou');

  // Exemplo de envio de dados em tempo real para o cliente
  setInterval(() => {
    const dadosEmTempoReal = {
      temperatura: Math.random() * 100,
      umidade: Math.random() * 100,
      logs: ['Log 1', 'Log 2', 'Log 3'], // Inclua seus logs aqui
    };
    socket.emit('atualizarDados', dadosEmTempoReal);
  }, 1000);
});

// Inicie o servidor na porta 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
