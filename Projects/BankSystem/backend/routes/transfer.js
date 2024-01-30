var express = require('express');
var router = express.Router();
const transfer = require('../models/transfer_model');

// GET (LISTAA) tilin tiedot
router.get('/:id?',
 function(request, response) {
  if (request.params.id) {
    transfer.getById(request.params.id, function(err, data) {
      if (err) {
        response.json(err);
      } else {
        response.json(data);
      }
    });
  } else {
    transfer.getAll(function(err, data) {
      if (err) {
        response.json(err);
      } else {
        response.json(data);
      }
    });
  }
});

// POST switch caset tilisiirtojen tyyppien hallintaan
router.post('/:transferType', function(request, response) {
  const { first_id, second_id, amount } = request.body;
  const transferType = request.params.transferType;

  switch (transferType) {
    case 'checking_transfer':
    case 'credit_transfer':
    case 'to_credit_transfer':
    case 'to_savings_transfer':
    case 'from_savings_transfer':
      transfer[transferType]({ first_id, second_id, amount }, function(err, data) {
        if (err) {
          response.json(err);
        } else {
          response.json(data);
        }
      });
      break;
    default:
      response.status(404).json({ error: 'Invalid transfer type' });
  }
});

// DELETE (POISTA) poistaa tietoja tililtä
router.delete('/:id', 
function(request, response) {
  transfer.delete(request.params.id, function(err, data) {
    if (err) {
      response.json(err);
    } else {
      response.json(data);
    }
  });
});

// PUT (PÄIVITÄ) tilin tiedot
router.put('/:id', function(request, response) {
  transfer.update(request.params.id, function(err, data) {
    if (err) {
      response.json(err);
    } else {
      response.json(data);
    }
  });
});

module.exports = router;
