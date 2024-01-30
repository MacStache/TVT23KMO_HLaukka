const db = require('../database');

const inquiry = {
    getAll: function(callback) {
      return db.query('select * from inquiry', callback);
    },
    getById: function(id, callback) {
      return db.query('select * from inquiry where id=?', [id], callback);
    },
    add: function(inquiry, callback) {
      return db.query('CALL get_inquiries(?)',
        [
          inquiry.card_id,

        ], callback);
    },
    delete: function(id, callback) {
      return db.query('delete from inquiry where id=?', [id], callback);
    },
    update: function(id, inquiry, callback) {
      return db.query('update inquiry set id=?, card_id=?, balance=?, credit_balance=?, transaction_type_code=? where id=?',
        [
          inquiry.id,
          inquiry.card_id,
          inquiry.balance,
          inquiry.credit_balance,
          inquiry.transaction_type_code,
          id
        ], callback);
    }
  }
  
  module.exports = inquiry;