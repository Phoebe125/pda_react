const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("My First Board");
});

module.exports = router;