const express = require('express');
const { name } = require('pug/lib');
const router = express.Router();
const Gamer = require('../models/modelGame');

router.get('/', function(req, res, next){
    const data = Gamer.find();
    data
        .then(result => res.json(result))
        .catch(err => console.log(err));
    
});





module.exports = router;