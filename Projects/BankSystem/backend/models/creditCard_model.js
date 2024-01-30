const db = require('../database');
// Maximum credit limit 
const MAX_CREDIT_LIMIT = 5000;

const creditCard = {
  getAll: function (callback) {
    return db.query('select * from credit_card', callback);
  },
  getById: function (id, callback) {
    return db.query('select * from credit_card where id=?', [id], callback);
  },
  add: function (credit_card, callback) {
    // credit_limit ei voi olla yli MAX_CREDIT_LIMIT -> error message
    if (credit_card.credit_limit > MAX_CREDIT_LIMIT) {
      const error = new Error();
      return callback({error: 'Luottoraja ei voi olla yli ' + MAX_CREDIT_LIMIT}, null);
    }
    // credit_balance ei voi olla yli credit_limit -> error message
    if (credit_card.credit_balance > credit_card.credit_limit) {
      const error = new Error();
      return callback({error: 'Luottosaldo ei voi ylittää luottorajaa'}, null);
    }
    return db.query('insert into credit_card (id, card_id, active, credit_limit, credit_balance, type) values(?,?,?,?,?,?)',
      [
        credit_card.id,
        credit_card.card_id,
        credit_card.active,
        credit_card.credit_limit,
        credit_card.credit_balance,
        credit_card.type
      ], callback);
  },
  delete: function (id, callback) {
    return db.query('delete from credit_card where id=?', [id], callback);
  },
  update: function (id, credit_card, callback) {
    // credit_limit ei voi olla yli MAX_CREDIT_LIMIT -> error message
    if (credit_card.credit_limit > MAX_CREDIT_LIMIT) {
      const error = new Error();
      return callback({error: 'Luottoraja ei voi olla yli ' + MAX_CREDIT_LIMIT}, null);
    }
    // credit_balance ei voi olla yli credit_limit -> error message
    if (credit_card.credit_balance > credit_card.credit_limit) {
      const error = new Error();
      return callback({error: 'Luottosaldo ei voi ylittää luottorajaa'}, null);
    }
    return db.query('update credit_card set id=?, card_id=?, active=?, credit_limit=?, credit_balance=?, type=? where id=?',
      [
        credit_card.id,
        credit_card.card_id,
        credit_card.active,
        credit_card.credit_limit,
        credit_card.credit_balance,
        credit_card.type,
        id
      ], callback);
  }
};

module.exports = creditCard;
