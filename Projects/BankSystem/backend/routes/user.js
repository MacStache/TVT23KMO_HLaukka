var express = require('express');
var router = express.Router();
const user = require('../models/user_model');

/* GET users listing. */
router.get('/:id?',
 function(request, response) {
  if (request.params.id) {
    user.getById(request.params.id, function(err, data) {
      if (err) {
        response.json(err);
      } else {
        response.json(data);
      }
    });
  } else {
    user.getAll(function(err, data) {
      if (err) {
        response.json(err);
      } else {
        response.json(data);
      }
    });
  }
});
router.post('/', 
function(request, response) {
  user.add(request.body, function(err, data) {
    if (err) {
      response.json(err);
    } else {
      response.json(data); 
    }
  });
});

router.delete('/:id', 
function(request, response) {
  user.delete(request.params.id, function(err, data) {
    if (err) {
      response.json(err);
    } else {
      response.json(data);
    }
  });
});


router.put('/:id', 
function(request, response) {
  user.update(request.params.id, request.body, function(err, data) {
    if (err) {
      response.json(err);
    } else {
      response.json(data);
    }
  });
});

module.exports = router;
