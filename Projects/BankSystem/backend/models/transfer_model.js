const db = require('../database');

const transfer = {
  getAll: function(callback) {
    return db.query('select * from transfer', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from transfer where id=?', [id], callback);
  },
  add: function(transfer, callback) {
    return db.query('insert into transfer (id, card_id, account_id, amount, transaction_type_code) values(?,?,?,?,?)',
      [
        transfer.id,
        transfer.card_id,
        transfer.account_id,
        transfer.amount,
        transfer.transaction_type_code
      ], callback);
  },
  delete: function(id, callback) {
    return db.query('delete from transfer where id=?', [id], callback);
  },
  update: function(id, transfer, callback) {
    return db.query('update transfer set id=?, card_id=?, account_id=?, amount=?, transaction_type_code=? where id=?',
      [
        transfer.id,
        transfer.card_id,
        transfer.account_id,
        transfer.amount,
        transfer.transaction_type_code,
        id
      ], callback);
  },
  checking_transfer: function(transfer, callback) {
    return db.query('call checking_transfer(?,?,?)',
      [
        transfer.first_id,
        transfer.second_id,
        transfer.amount,
      ], callback);
  },
  credit_transfer: function(transfer, callback) {
    return db.query('call credit_transfer(?,?,?)',
      [
        transfer.first_id,
        transfer.second_id,
        transfer.amount,
      ], callback);
  },
  to_credit_transfer: function(transfer, callback) {
    return db.query('call to_credit_transfer(?,?,?)',
      [
        transfer.first_id,
        transfer.second_id,
        transfer.amount,
      ], callback);
  },
  to_savings_transfer: function(transfer, callback) {
    return db.query('call to_savings_transfer(?,?,?)',
      [
        transfer.first_id,
        transfer.second_id,
        transfer.amount,
      ], callback);
  },
  from_savings_transfer: function(transfer, callback) {
    return db.query('call from_savings_transfer(?,?,?)',
      [
        transfer.first_id,
        transfer.second_id,
        transfer.amount,
      ], callback);
  }
}

module.exports = transfer;