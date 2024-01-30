const db = require('../database');

const transaction = {
    getAll: function(callback) {
      return db.query('select * from transaction', callback);
    },
    getById: function(id, callback) {
      return db.query('select * from transaction where id=?', [id], callback);
    },
    add: function(transaction, callback) {
      return db.query('insert into transaction (id, account_id, transaction_type_code, balance, date) values(?,?,?,?,NOW())',
       [
          transaction.id,
          transaction.account_id,
          transaction.transaction_type_code,
          transaction.balance,
       ], callback);
    },
    delete: function(id, callback) {
      return db.query('delete from transaction where id=?', [id], callback);
    },
    update: function(id, transaction, callback) {
      return db.query('update transaction set id=?, account_id=?, transaction_type_code=?, balance=?, date=? where id=?',
       [
          transaction.id,
          transaction.account_id,
          transaction.transaction_type_code,
          transaction.balance,
          id
       ], callback);
    }
  }
  
  module.exports = transaction;