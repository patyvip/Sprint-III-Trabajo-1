/*const express = require('express');
const path = require('path');
const app = express();
const route = express.Router();
app.set('view engine', 'ejs');
const PORT = 3000;

app.get('/', (req, res) => {
    res.render(path.join(__dirname, '/views/pages/index.ejs'));
    console.log('Estoy en el inicio');
});

app.get('/contacto', (req, res) => {
    res.send('Estoy en la página de contacto');
    console.log('Estoy en la página de contacto');
});

app.get('/nosotros', (req, res) => {
    res.send('Estoy en la página nosotros');
    console.log('Estoy en la página nosotros');
});

app.get('/detalle-producto', (req, res) => {
    res.send('Estoy en el detale del producto');
    console.log('Estoy en el detale del producto');
});

app.get('/inicio-sesion', (req, res) => {
    res.send('Estoy en el inicio de sesión');
    console.log('Estoy en el inicio de sesión');
});

app.get('/registrarme', (req, res) => {
    res.send('Estoy en la página de registro');
    console.log('Estoy en la página de registro');
});

app.get('/carrito', (req, res) => {
    res.send('Estoy en el carrito');
    console.log('Estoy en el carrito');
});

app.get('/ayuda', (req, res) => {
    res.send('Estoy en la página de ayuda');
    console.log('Estoy en la página de ayuda');
});

app.get('/acerca', (req, res) => {
    res.send('Estoy en la página de información');
    console.log('Estoy en la página de información');
});

app.get('/legales', (req, res) => {
    res.send('Estoy en la página de legales');
    console.log('Estoy en la página de legales');
});

app.use("/public", express.static(path.join(__dirname, '/public')));*/
const PORT = 3000;
let app = require('./routes/routing.js');
app.set('view engine', 'ejs');

app.listen(PORT, () => console.log('escuchando en puerto: ', PORT));