const db = require('../database');

const checkingAcc={
    getAll: function(callback) {
      return db.query('select * from checking_account', callback);
    },
    getById: function(id, callback) {
      return db.query('select * from checking_account where id=?', [id], callback);
    },
    add: function(checking_account, callback) {
      return db.query('insert into checking_account (id, card_id, user_id, active, balance, type, charge_rate, interest_rate) values(?,?,?,?,?,?,?,?)',
      [
        checking_account.id, 
        checking_account.card_id, 
        checking_account.user_id, 
        checking_account.active, 
        checking_account.balance, 
        checking_account.type, 
        checking_account.charge_rate, 
        checking_account.interest_rate
      ], callback);
    },
    delete: function(id, callback) {
      return db.query('delete from checking_account where id=?', [id], callback);
    },
    update: function(id, checking_account, callback) {
      return db.query('update checking_account set id=?, card_id=?, user_id=?, active=?, balance=?, type=?, charge_rate=?, interest_rate=? where id=?',
      [
        checking_account.id, 
        checking_account.card_id, 
        checking_account.user_id, 
        checking_account.active, 
        checking_account.balance, 
        checking_account.type, 
        checking_account.charge_rate, 
        checking_account.interest_rate, 
        id
      ], callback);
    }
  }
          
module.exports = checkingAcc;
