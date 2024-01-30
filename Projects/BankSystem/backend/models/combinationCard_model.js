const db = require('../database');
// Maksimi luottoraja määritellään tässä
const MAX_CREDIT_LIMIT = 5000;

const combinationCard = {
  getAll: function (callback) {
    return db.query('SELECT * FROM combination_card', callback);
  },
  getById: function (id, callback) {
    return db.query('SELECT * FROM combination_card WHERE id = ?', [id], callback);
  },
  add: function (combination_card, callback) {
    // Tarkistetaan, ettei (debit) balance mene miinukselle
    if (combination_card.balance < 0) {
      const error = new Error();
      return callback({ error: 'Saldo ei voi mennä miinukselle' }, null);
    }

    // Tarkistetaan, ettei (debit) balance mene miinukselle
    if (combination_card.type !== 'debit') {
      if (combination_card.credit_limit > MAX_CREDIT_LIMIT) {
        const error = new Error();
        return callback({ error: 'Luottoraja ei voi olla yli ' + MAX_CREDIT_LIMIT }, null);
      }
      if (combination_card.credit_balance > combination_card.credit_limit) {
        const error = new Error();
        return callback({ error: 'Luottosaldo ei voi ylittää luottorajaa' }, null);
      }
    }

    return db.query('INSERT INTO combination_card (card_id, active, balance, withdraw_limit, credit_limit, credit_balance, type) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [
        combination_card.card_id,
        combination_card.active,
        combination_card.balance,
        combination_card.withdraw_limit,
        combination_card.credit_limit,
        combination_card.credit_balance,
        combination_card.type
      ], callback);
  },
  delete: function (id, callback) {
    return db.query('DELETE FROM combination_card WHERE id = ?', [id], callback);
  },
  update: function (id, combination_card, callback) {
    // Tarkistetaan, ettei (debit) balance mene miinukselle
    if (combination_card.balance < 0) {
      const error = new Error();
      return callback({ error: 'Saldo ei voi mennä miinukselle' }, null);
    }

    // Tarkistetaan, ettei (debit) balance mene miinukselle
    if (combination_card.type !== 'debit') {
      if (combination_card.credit_limit > MAX_CREDIT_LIMIT) {
        const error = new Error();
        return callback({ error: 'Luottoraja ei voi olla yli ' + MAX_CREDIT_LIMIT }, null);
      }
      if (combination_card.credit_balance > combination_card.credit_limit) {
        const error = new Error();
        return callback({ error: 'Luottosaldo ei voi ylittää luottorajaa' }, null);
      }
    }

    return db.query('UPDATE combination_card SET card_id = ?, active = ?, balance = ?, withdraw_limit = ?, credit_limit = ?, credit_balance = ?, type = ? WHERE id = ?',
      [
        combination_card.card_id,
        combination_card.active,
        combination_card.balance,
        combination_card.withdraw_limit,
        combination_card.credit_limit,
        combination_card.credit_balance,
        combination_card.type,
        id
      ], callback);
  }
};

module.exports = combinationCard;