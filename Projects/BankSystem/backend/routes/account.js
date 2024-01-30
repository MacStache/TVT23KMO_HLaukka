var express = require('express');
var router = express.Router();
const account = require('../models/account_model');

// GET (LISTAA) tilin tiedot
router.get('/:id?',
 function(request, response) {
  if (request.params.id) {
    account.getById(request.params.id, function(err, data) {
      if (err) {
        response.json(err);
      } else {
        response.json(data);
      }
    });
  } else {
    account.getAll(function(err, data) {
      if (err) {
        response.json(err);
      } else {
        response.json(data);
      }
    });
  }
});
// POST (LUO) tilin tiedot
router.post('/', function(request, response) {
  const accountData = {
    user_id: request.body.user_id,
    card_id: request.body.card_id,
    type: request.body.type,
    card_type: request.body.card_type
  };

  account.add(accountData, function(err, data) {
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
  account.delete(request.params.id, function(err, data) {
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
  account.update(request.params.id, request.body, function(err, data) {
    if (err) {
      response.json(err);
    } else {
      response.json(data);
    }
  });
});

module.exports = router;
