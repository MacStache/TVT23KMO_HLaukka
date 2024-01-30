var express = require('express');
var router = express.Router();
const inquiry = require('../models/inquiry_model');

// GET (LISTAA) tilin tiedot
router.get('/:id?',
 function(request, response) {
  if (request.params.id) {
    inquiry.getById(request.params.id, function(err, data) {
      if (err) {
        response.json(err);
      } else {
        response.json(data);
      }
    });
  } else {
    inquiry.getAll(function(err, data) {
      if (err) {
        response.json(err);
      } else {
        response.json(data);
      }
    });
  }
});
//POST (LUO) tietoja tilille
router.post('/:id', 
function(request, response) {
  inquiry.add(request.body, function(err, data) {
    if (err) {
      response.json(err);
    } else {
      response.json(data); 
    }
  });
});
//DELETE (POISTA) poistaa tietoja tililtä
router.delete('/:id', 
function(request, response) {
  inquiry.delete(request.params.id, function(err, data) {
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
  inquiry.update(request.params.id, request.body, function(err, data) {
    if (err) {
      response.json(err);
    } else {
      response.json(data);
    }
  });
});

module.exports = router;
