const express = require('express');
const connection = require('./database/connection');

const AssessoresController = require('./database/controllers/AssessoresController');
const AtendimentosController = require('./database/controllers/AtendimentosController');
const SessionController = require('./database/controllers/SessionController');

const routes = express.Router();

routes.post('/create-assesssor', AtendimentosController.createAssessor);
routes.post('/create-atendimentos', AtendimentosController.createAtendimento);
routes.get('/assessores', AtendimentosController.indexAssessor);
routes.get('/atendimentos', AtendimentosController.indexAtendimentos);
routes.post('/atendimentos/update', AtendimentosController.moveToNegotiation);

routes.get('/assessores/leads', AssessoresController.indexLeads);
routes.get('/assessores/leads-negotiate', AssessoresController.leadInNegotiation);
routes.get('/assessores/leads-complete', AssessoresController.leadsWithCompleteNegotiation);

routes.post('/login', SessionController.login);


module.exports = routes;