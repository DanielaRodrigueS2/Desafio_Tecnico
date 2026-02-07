const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const ClienteRoutes = require('./routes/ClienteRoutes');

const app = express({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credetials: true
});

app.use(cors());
app.use(express.json());

app.use(ClienteRoutes);


module.exports = app