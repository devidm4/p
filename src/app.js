require('./config/dotenv');
require('express-async-errors');

const express = require('express');
const {  initDatabase } = require('./config/db');
const cors = require('cors');

const experienciasRoute = require('./routes/experienciasRoute');
const portfolioRoute = require('./routes/portfolioRoute');
const informacoesRouter = require('./routes/informacoesRoute');
const authRoute = require('./routes/authRoute');

const app = express();

const port = process.env.APP_PORT || 5000;

app.get('/', (req, res) => {
    res.send('Seja bem-vindo à API do Meu Site Pessoal!');
});

app.use(cors());

app.use(express.json());

app.use('/api/experiencias', experienciasRoute);
app.use('/api/portfolio', portfolioRoute);
app.use('/api/informacoes', informacoesRouter);
app.use('/api/auth', authRoute);

initDatabase();

app.use((err, req, res, next) => {
    console.error= (err.status) 
    res.status(500).send({'error': err.message});
});

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});