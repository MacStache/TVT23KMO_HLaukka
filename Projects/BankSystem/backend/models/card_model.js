const db = require('../database');
//RandomPinGen moduulin sijainti
const randomPinGen = require('./randomPinGen');

const card={
    getAll: function(callback) {
      return db.query('select * from card', callback);
    },
    getById: function(id, callback) {
      return db.query('select * from card where id=?', [id], callback);
    },
    getCardByPin: function(pin, callback) {
      return db.query('select * from card where pin=?', [pin], callback);
    },
    add: function(card, callback) {
      //Luodaan sattumanvarainen pin-koodi käyttämällä randomPinGen -moduulia
      // Kortin expire_date on 5 vuotta eteenpäin
      const randomPIN = randomPinGen.generateRandomPIN();
      return db.query('insert into card (id, user_id, pin, type, expire_date) values(?,?,?,?,Date_add(NOW(), INTERVAL 5 YEAR))',
      [
        card.id, 
        card.user_id,
        //Muutetaan pin-koodi stringiksi, jotta se voidaan tallentaa tietokantaan
        randomPIN.toString(), 
        card.type,
      ], callback);
    },
    delete: function(id, callback) {
      return db.query('delete from card where id=?', [id], callback);
    },
    update: function(id, card, callback) {
      const randomPIN = randomPinGen.generateRandomPIN();
      return db.query('update card set id=?, user_id=?, pin=?, type=?, expire_date=Date_add(NOW(), INTERVAL 5 YEAR) where id=?',
      [
        card.id, 
        card.user_id, 
        randomPIN.toString(),
        card.type, 
        id
      ], callback);
    }
  }
          
module.exports = card;