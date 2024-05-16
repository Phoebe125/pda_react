const express = require('express');
const router = express.Router();

const Board = require('../models/Board');

router.get('/', (req, res)=>{
    res.send("My First Board");
});

module.exports = router;