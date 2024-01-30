var express = require('express');
var router = express.Router();
const user = require('../models/user_model');
const card = require('../models/card_model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

router.post('/', function (request, response) {
  const input = request.body.pin || request.body.email;
  const password = request.body.password;

  if (input && password) {
    //Tarkistetaan kuinka pitkä input syötettiin tunnuskenttään
    if (input.length === 4) {
      // Jos input on 4 merkkiä pitkä, oletetaan että se on pin-koodi ja haetaan kortin tiedot pin-koodin perusteella
      card.getCardByPin(input, function (cardError, cardResult) {
        // Jos on virhe niin kerrotaan se
        if (cardError) {
          response.json(cardError);
        } else {
          // Tarkistetaan onko korttia olemassa. Jos on, niin tarkistetaan mihin user_id:hen kortti kuuluu
          if (cardResult.length > 0) {
            const userIdFromCard = cardResult[0].user_id;
            // Haetaan tietokannanan user -taulusta tiedot korttiin liitetyn user_id:n arvon perusteella
            user.getById(userIdFromCard, function (userError, userResult) {
              // Jos on virhe niin kerrotaan se
              if (userError) {
                response.json(userError);
                //Jos pin-koodi on olemassa niin aletaan tarkistamaan salasana vertaamalla 
                //sitä aiemmin selvitetyn user_id: perusteella tietokannassa olevaan salasanaan 
              } else {
                //Jos salasana on kirjoitettu niin edetään
                if (userResult.length > 0) {
                  //Pyydetään bcryptiä tarkistamaan salattu salasana
                  bcrypt.compare(password, userResult[0].password, function (err, compareResult) {
                    //Jos compareResult palauttaa samaa niin kirjautuminen onnistui,
                    if (compareResult) {
                      console.log("Käyttäjäkirjautuminen onnistui");
                      //Luodaan token ja lähetetään se responsena
                       const token = generateAccessToken({ username: user });
                       response.send(token);
                    } else {
                      //Muussa tapauksessahan salasana on väärä
                      console.log("Väärä salasana");
                      response.send(false);
                    }
                  });
                } else {
                  //Jos id saadaan haettua, mutta se ei vastaa yhtäkään käyttäjää niin palautetaan virhe
                  console.log("Käyttäjää ei ole");
                  response.send(false);
                }
              }
            });
          } else {
            //Jos pin-koodi on väärä niin kerrotaan se
            console.log("Väärä pin-koodi");
            response.send(false);
          }
        }
      });
    } else {
      // Jos input on yli 4 merkkiä pitkä niin oletetaan, että se on sähköpostiosoite
      user.login(input, function (userError, userResult) {
        // Jos on virhe niin kerrotaan se
        if (userError) {
          response.json(userError);
        } else {
          //Tarkistetaan, että sähköposti on syötetty ja käyttäjän admin -kentässä on arvo 1
          if (userResult.length > 0 && userResult[0].admin === 1) {
            //Pyydetään bcryptiä tarkistamaan salattu salasana
            bcrypt.compare(password, userResult[0].password, function (err, compareResult) {
              //Jos kaikki oikein niin kirjautuminen onnistui
              if (compareResult) {
                console.log("Admin kirjautuminen onnistui");
                // Admin funktionaalisuus lisätään tähän. 
                // Esim. Tokeni joka avaa admin ominaisuudet? Ohjaus admin sivulle?
                response.send(true);
              } else {
                //Jos salasana on väärin
                console.log("Väärä salasana");
                response.send(false);
              }
            });
          } else {
            //Jos id saadaan haettua, mutta se ei vastaa yhtäkään käyttäjää tai käyttäjä ei ole admin
            console.log("Pääsy evätty: Ei admin tai käyttäjää ei ole olemassa");
            response.send(false);
          }
        }
      });
    }
  } else {
    //Jos kirjautumistietoja ei ole syötetty
    console.log("Tietoja puuttuu");
    response.send(false);
  }
});

function generateAccessToken(username) {
  dotenv.config();
  return jwt.sign(username, process.env.MY_TOKEN, { expiresIn: '1800s' });
}

module.exports = router;