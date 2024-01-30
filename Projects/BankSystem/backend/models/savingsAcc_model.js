const db = require('../database');

const savingsAcc = {
    getAll: function(callback) {
      return db.query('select * from savings_account', callback);
    },
    getById: function(id, callback) {
      return db.query('select * from savings_account where id=?', [id], callback);
    },
    add: function(savings_account, callback) {
      return db.query('insert into savings_account (id, card_id, user_id, active, balance, type, interest_rate) values(?,?,?,?,?,?,?)',
       [
          savings_account.id,
          savings_account.card_id,
          savings_account.user_id,
          savings_account.active,
          savings_account.balance,
          savings_account.type,
          savings_account.interest_rate
       ], callback);
    },
    delete: function(id, callback) {
      return db.query('delete from savings_account where id=?', [id], callback);
    },
    update: function(id, savings_account, callback) {
      return db.query('update savings_account set id=?, card_id=?, user_id=?, active=?, balance=?, type=?, interest_rate=? where id=?',
       [
          savings_account.id,
          savings_account.card_id,
          savings_account.user_id,
          savings_account.active,
          savings_account.balance,
          savings_account.type,
          savings_account.interest_rate,
          id
       ], callback);
    }
  }
  
  module.exports = savingsAcc;