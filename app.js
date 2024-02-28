const express = require('express');
const app = express();

app.listen(8081, () => {
    console.log('Servidor rodando na porta 8081');
});

app.get('/', (req, res) => {
    res.send('Página de home');
});

app.get('/produtos/:automovel/:marca/:modelo/:ano', (req, res) => {
    res.send('Página de produtos - Automovel: ' + req.params.automovel + ' - Marca: ' + req.params.marca + ' - Modelo: ' + req.params.modelo + ' - Ano: ' + req.params.ano);
});

app.get('/cadastrar/:usuario', (req, res) => {
    res.send('Página de cadastrar - Usuario: ' + req.params.usuario);
});

app.get('/contato', (req, res) => {
    res.send('Página de contato');
});