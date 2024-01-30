const db = require('../database');

const withdraw = {
    getAll: function(callback) {
      return db.query('select * from withdraw', callback);
    },
    getById: function(id, callback) {
      return db.query('select * from withdraw where id=?', [id], callback);
    },
    add: function(withdraw, callback) {
      return db.query('insert into withdraw (id, card_id, amount, transaction_type_code) values(?,?,?,?)',
        [
          withdraw.id,  
          withdraw.card_id,
          withdraw.amount,
          withdraw.transaction_type_code
        ], callback);
    },
    delete: function(id, callback) {
      return db.query('delete from withdraw where id=?', [id], callback);
    },
    update: function(id, withdraw, callback) {
      return db.query('update withdraw set id=?, card_id=?, amount=?, transaction_type_code=? where id=?',
        [
          withdraw.id,
          withdraw.card_id,
          withdraw.amount,
          withdraw.transaction_type_code,
          id
        ], callback);
    },
    checking_withdraw: function(withdraw, callback) {
      return db.query('call checking_withdraw(?,?,?)',
        [
          withdraw.account_id,
          withdraw.amount,
          withdraw.card_id,
        ], callback);
    },
    credit_withdraw: function(withdraw, callback) {
      return db.query('call credit_withdraw(?,?,?)',
        [
          withdraw.account_id,
          withdraw.amount,
          withdraw.card_id,
        ], callback);
    },
  }
  
  module.exports = withdraw;