var express = require('express');
var router = express.Router();
const savingsAcc = require('../models/savingsAcc_model');

// GET (LISTAA) tilin tiedot
router.get('/:id?',
 function(request, response) {
  if (request.params.id) {
    savingsAcc.getById(request.params.id, function(err, data) {
      if (err) {
        response.json(err);
      } else {
        response.json(data);
      }
    });
  } else {
    savingsAcc.getAll(function(err, data) {
      if (err) {
        response.json(err);
      } else {
        response.json(data);
      }
    });
  }
});
//POST (LUO) tilin tiedot
router.post('/', 
function(request, response) {
  savingsAcc.add(request.body, function(err, data) {
    if (err) {
      response.json(err);
    } else {
      response.json(data); 
    }
  });
});
//DELETE (POISTA) tilin tiedot
router.delete('/:id', 
function(request, response) {
  savingsAcc.delete(request.params.id, function(err, data) {
    if (err) {
      response.json(err);
    } else {
      response.json(data);
    }
  });
});

//PUT (PÄIVITÄ) tilin tiedot
router.put('/:id', 
function(request, response) {
  savingsAcc.update(request.params.id, request.body, function(err, data) {
    if (err) {
      response.json(err);
    } else {
      response.json(data);
    }
  });
});

module.exports = router;
