const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credetials: true
});

app.use(cors());
app.use(express.json());


module.exports = app