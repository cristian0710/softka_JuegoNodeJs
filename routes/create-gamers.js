const express = require('express');
const router = express.Router();
const Gamer = require('../models/modelGame');

router.post('/', function(req, res, next) {
    const gamer = new Gamer({
      name: req.body.name,
      num: req.body.num
    });
  
    gamer
      .save()
      .then(result => res.json(result))
      .catch(err => res.json(err));    
  });

  module.exports = router;