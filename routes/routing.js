const express = require('express');
const path = require('path');
const serverApp = express();
const route = express.Router();

serverApp.get('/', (req, res) => {
    res.render(path.join(__dirname, '../views/pages/index.ejs'));
    console.log('Estoy en el inicio');
});

serverApp.get('/contacto', (req, res) => {
    res.send('Estoy en la página de contacto');
    console.log('Estoy en la página de contacto');
});

serverApp.get('/nosotros', (req, res) => {
    res.send('Estoy en la página nosotros');
    console.log('Estoy en la página nosotros');
});

serverApp.get('/detalle-producto', (req, res) => {
    res.send('Estoy en el detale del producto');
    console.log('Estoy en el detale del producto');
});

serverApp.get('/inicio-sesion', (req, res) => {
    res.send('Estoy en el inicio de sesión');
    console.log('Estoy en el inicio de sesión');
});

serverApp.get('/registrarme', (req, res) => {
    res.send('Estoy en la página de registro');
    console.log('Estoy en la página de registro');
});

serverApp.get('/carrito', (req, res) => {
    res.send('Estoy en el carrito');
    console.log('Estoy en el carrito');
});

serverApp.get('/ayuda', (req, res) => {
    res.send('Estoy en la página de ayuda');
    console.log('Estoy en la página de ayuda');
});

serverApp.get('/acerca', (req, res) => {
    res.send('Estoy en la página de información');
    console.log('Estoy en la página de información');
});

serverApp.get('/legales', (req, res) => {
    res.send('Estoy en la página de legales');
    console.log('Estoy en la página de legales');
});

serverApp.use("/public", express.static(path.join(__dirname, '../public')));
console.log(path.join(__dirname, '../public'));

module.exports = serverApp;