var express = require('express');
var router = express.Router();
const debitCard = require('../models/debitCard_model');

// GET (LISTAA) kortin tiedot
router.get('/:id?',
 function(request, response) {
  if (request.params.id) {
    debitCard.getById(request.params.id, function(err, data) {
      if (err) {
        response.json(err);
      } else {
        response.json(data);
      }
    });
  } else {
    debitCard.getAll(function(err, data) {
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
  debitCard.add(request.body, function(err, data) {
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
  debitCard.delete(request.params.id, function(err, data) {
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
  debitCard.update(request.params.id, request.body, function(err, data) {
    if (err) {
      response.json(err);
    } else {
      response.json(data);
    }
  });
});

module.exports = router;
