var express = require('express');
var router = express.Router();
const withdraw = require('../models/withdraw_model');

// GET (LISTAA) tilin tiedot
router.get('/:id?',
 function(request, response) {
  if (request.params.id) {
    withdraw.getById(request.params.id, function(err, data) {
      if (err) {
        response.json(err);
      } else {
        response.json(data);
      }
    });
  } else {
    withdraw.getAll(function(err, data) {
      if (err) {
        response.json(err);
      } else {
        response.json(data);
      }
    });
  }
});
// POST switch caset nostotyyppien hallintaan
router.post('/:withdrawType', function(request, response) {
  const { account_id, amount, card_id } = request.body;
  const withdrawType = request.params.withdrawType;

  switch (withdrawType) {
    case 'checking_withdraw':
    case 'credit_withdraw':
      withdraw[withdrawType]({ account_id, amount, card_id }, function(err, data) {
        if (err) {
          response.json(err);
        } else {
          response.json(data);
        }
      });
      break;
    default:
      response.status(404).json({ error: 'Invalid withdraw type' });
  }
});
//DELETE (POISTA) poistaa tietoja tililtä
router.delete('/:id', 
function(request, response) {
  withdraw.delete(request.params.id, function(err, data) {
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
  withdraw.update(request.params.id, request.body, function(err, data) {
    if (err) {
      response.json(err);
    } else {
      response.json(data);
    }
  });
});

module.exports = router;
