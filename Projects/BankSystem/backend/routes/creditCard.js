var express = require('express');
var router = express.Router();
const creditCard = require('../models/creditCard_model');

// GET (LISTAA) kortin tiedot
router.get('/:id?',
 function(request, response) {
  if (request.params.id) {
    creditCard.getById(request.params.id, function(err, data) {
      if (err) {
        response.json(err);
      } else {
        response.json(data);
      }
    });
  } else {
    creditCard.getAll(function(err, data) {
      if (err) {
        response.json(err);
      } else {
        response.json(data);
      }
    });
  }
});
//POST (LUO) tietoja kortille
router.post('/', 
function(request, response) {
  creditCard.add(request.body, function(err, data) {
    if (err) {
      response.json(err);
    } else {
      response.json(data); 
    }
  });
});
//DELETE (POISTA) poistaa tietoja kortilta
router.delete('/:id', 
function(request, response) {
  creditCard.delete(request.params.id, function(err, data) {
    if (err) {
      response.json(err);
    } else {
      response.json(data);
    }
  });
});

//PUT (PÄIVITÄ) tilin kortin
router.put('/:id', 
function(request, response) {
  creditCard.update(request.params.id, request.body, function(err, data) {
    if (err) {
      response.json(err);
    } else {
      response.json(data);
    }
  });
});

module.exports = router;
