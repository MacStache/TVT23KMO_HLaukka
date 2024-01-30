const db = require('../database');

const creditAcc = {
  getAll: function(callback) {
    return db.query('select * from credit_account', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from credit_account where id=?', [id], callback);
  },
  add: function(account, callback) {
    return db.query('insert into credit_account (id, card_id, user_id, active, balance, credit_balance, type, charge_rate, loan_interest) values(?,?,?,?,?,?,?,?,?)',
      [
        account.id,
        account.card_id,
        account.user_id,
        account.active,
        account.balance,
        account.credit_balance,
        account.type,
        account.charge_rate,
        account.loan_interest
      ], callback);
  },
  delete: function(id, callback) {
    return db.query('delete from credit_account where id=?', [id], callback);
  },
  update: function(id, account, callback) {
    return db.query('update credit_account set id=?, card_id=?, user_id=?, active=?, balance=?, credit_balance=?, type=?, charge_rate=?, loan_interest=? where id=?',
      [
        account.card_id,
        account.user_id,
        account.active,
        account.balance,
        account.credit_balance,
        account.type,
        account.charge_rate,
        account.loan_interest,
        id
      ], callback);
  }
}

module.exports = creditAcc;