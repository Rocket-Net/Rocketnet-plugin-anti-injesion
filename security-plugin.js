const express = require('express');
const xss = require('xss');

const securityPlugin = (options = {}) => {
  const router = express.Router();

  // Middleware para processar a entrada do usuário
  router.use((req, res, next) => {
    try {
      // Processa a entrada do usuário usando a biblioteca xss
      const sanitizedInput = xss(req.body.input);

      // Verifica se a entrada original é diferente da entrada sanitizada
      if (req.body.input !== sanitizedInput) {
        // Exibe um alerta indicando que a tentativa maliciosa foi detectada
        console.log('Ops! Tentativa maliciosa detectada!');
        // Você pode adicionar um registro no console ou em logs para rastreamento
      }

      // Define a entrada sanitizada de volta no corpo da solicitação
      req.body.input = sanitizedInput;

      // Continua o fluxo da requisição
      next();
    } catch (error) {
      console.error('Erro ao processar entrada do usuário:', error);
      // Trate o erro conforme necessário
      res.status(500).send('Erro interno do servidor');
    }
  });

  return router;
};

module.exports = securityPlugin;
