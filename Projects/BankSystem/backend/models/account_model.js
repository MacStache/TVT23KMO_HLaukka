const db = require('../database');
const randomPinGen = require('./randomPinGen');

const account = {
  getAll: function (callback) {
    return db.query('SELECT * FROM account', callback);
  },
  getById: function (id, callback) {
    return db.query('SELECT * FROM account WHERE id=?', [id], callback);
  },
  add: function (account, callback) {
    let createdCardId;
    let createdCard = false;

    const randomPIN = randomPinGen.generateRandomPIN();

    // Luodaan @createdCardId muuttuja ennen proseduuria
    db.query('SET @createdCardId = 0', function (declareError, declareResult) {
      if (declareError) {
        return callback(declareError);
      }

      // Kutsutaan add_card_and_type proseduuria
      db.query('CALL add_card_and_type(?, ?, @createdCardId)',
        [account.user_id, account.card_type],
        function (addCardAndTypeError, addCardAndTypeResult) {
          if (addCardAndTypeError) {
            return callback(addCardAndTypeError);
          }

          // noudetaan @createdCardId muuttuja proseduurin jälkeen
          db.query('SELECT @createdCardId as createdCardId', function (getIdError, getIdResult) {
            if (getIdError) {
              return callback(getIdError);
            }

            createdCardId = getIdResult[0].createdCardId;
            createdCard = true;

            addAccount();
          });
        });
    });

    //Lähdetään lisäämään tiliä
    function addAccount() {
      db.query('INSERT INTO account (id, user_id, card_id, type, created_at) VALUES (?,?,?,?,NOW())',
        [
          account.id,
          account.user_id,
          createdCardId,
          account.type
        ], function (addAccountError, addAccountResult) {
          if (addAccountError) {
            return callback(addAccountError);
          }

          // Lisätään tili sen tyyppiä vastaavaan tauluun kutsumalla insertAccountTypeData funktiota
          insertAccountTypeData(account.type, createdCardId, function (accountTypeInsertError) {
            if (accountTypeInsertError) {
              // Jos tulee errori niin käsitellään se
              return callback(accountTypeInsertError);
            }

            callback(null, addAccountResult);
          });
        });
    }

    function insertAccountTypeData(accountType, createdCardId, insertCallback) {
      // Lisätään tili sen tyyppiä vastaavaan tauluun
      switch (accountType) {
        case '1':
          db.query('INSERT INTO savings_account (id, card_id, user_id, active, balance, type, interest_rate) VALUES (?,?,?,?,?,?,?)',
            [
              account.id,
              createdCardId,
              account.user_id,
              '1',
              '5000',
              'savings_account',
              '5'
            ], insertCallback);
          break;
        case '2':
          db.query('INSERT INTO credit_account (id, card_id, user_id, active, balance, type, charge_rate, loan_interest) VALUES (?,?,?,?,?,?,?,?)',
            [
              account.id,
              createdCardId,
              account.user_id,
              '1',
              '5000',
              'credit_account',
              '5',
              '5'
            ], insertCallback);
          break;
        case '3':
          db.query('INSERT INTO checking_account (id, card_id, user_id, active, balance, type, charge_rate, interest_rate) VALUES (?,?,?,?,?,?,?,?)',
            [
              account.id,
              createdCardId,
              account.user_id,
              '1',
              '5000',
              'checking_account',
              '5',
              '5'
            ], insertCallback);
          break;
        default:
          // handlataan errori jos yritetään lisätä esimerkiksi väärän tyyppinen account
          insertCallback(new Error('Unknown account type'));
      }
    }
  },

  //Delete funktio. Tämä poistaa kaiken kaikista tilityypeistä ID:n perusteella myös virheen sattuessa.
  delete: function (id, callback) {
    db.query('DELETE FROM checking_account WHERE id=?', [id], function (checkingAccountError) {
      if (checkingAccountError) {
        return callback(checkingAccountError);
      }

      db.query('DELETE FROM savings_account WHERE id=?', [id], function (savingsAccountError) {
        if (savingsAccountError) {
          return callback(savingsAccountError);
        }

        db.query('DELETE FROM credit_account WHERE id=?', [id], function (creditAccountError) {
          if (creditAccountError) {
            return callback(creditAccountError);
          }

          db.query('DELETE FROM account WHERE id=?', [id], function (accountError, accountResult) {
            if (accountError) {
              return callback(accountError);
            }

            callback(null, accountResult);
          });
        });
      });
    });
  },

  // Päivitysfunktio
  update: function (id, account, callback) {
    return db.query('UPDATE account SET card_id=?, type=?, created_at=NOW() WHERE id=?',
        [
            account.card_id, // Use account.card_id instead of createdCardId
            account.type,
            id
        ], callback);
  }
};

module.exports = account;
