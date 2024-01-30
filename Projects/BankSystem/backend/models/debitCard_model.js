const db = require('../database');
//Määrittellään maksimi nostoraja
const MAX_WITHDRAW_LIMIT = 2000;

const debitCard = {
  getAll: function(callback) {
    return db.query('select * from debit_card', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from debit_card WHERE id=?', [id], callback);
  },
  add: function(debit_card, callback) {
    // Debit balance ei voi olla negatiivinen -> error message
    if (debit_card.balance < 0) {
      const error = new Error();
      return callback({error: 'Tilin saldo ei voi olla negatiivinen'}, null);
    }
    //Maksimi nostoraja 2000
    if (debit_card.withdraw_limit > MAX_WITHDRAW_LIMIT){
      const error = new Error();
      return callback({error: 'Maksimi nostoraja on ' + MAX_WITHDRAW_LIMIT}, null);
    }
    return db.query('insert into debit_card (id, card_id, active, balance, withdraw_limit, type) VALUES(?,?,?,?,?,?)',
      [
        debit_card.id, 
        debit_card.card_id,  
        debit_card.active, 
        debit_card.balance, 
        debit_card.withdraw_limit, 
        debit_card.type
      ], callback);
  },
  delete: function(id, callback) {
    return db.query('delete from debit_card WHERE id=?', [id], callback);
  },
  update: function(id, debit_card, callback) {
    // Debit balance ei voi olla negatiivinen -> error message
    if (debit_card.balance < 0){
      const error = new Error();
      return callback({error: 'Tilin saldo ei voi olla negatiivinen'}, null); 
    }
    //Maksimi nostoraja 2000
    if (debit_card.withdraw_limit > MAX_WITHDRAW_LIMIT){
      const error = new Error();
      return callback({error: 'Maksimi nostoraja on ' + MAX_WITHDRAW_LIMIT}, null);
    }
    return db.query('update debit_card SET id=?, card_id=?, active=?, balance=?, withdraw_limit=?, type=? WHERE id=?',
      [
        debit_card.id,
        debit_card.card_id,
        debit_card.active, 
        debit_card.balance, 
        debit_card.withdraw_limit, debit_card.type, 
        id
      ], callback);
  }
};
  
module.exports = debitCard;