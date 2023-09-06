#ifndef GAME_H
#define GAME_H
#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

class Game
{
public:
    Game(int maxNumber) //alustetaan Game -funktio
        : maxNumber(maxNumber), numOfGuesses(0){
        srand(time(0)); //asetetaan random number generaattorin siemen ajan perusteella
        randomNumber = 1 + rand() % maxNumber; //arvotaan numero ja varmistetaan että arvotaan vain 1-10 lukuja
        cout << "GAME CONSTRUCTOR: object initialized with " << maxNumber << " as a maximum value" << endl; //kerrotaan, että constructori on tehnyt tehtävänsä
    }
    ~Game(){
        cout << "GAME DESTRUCTOR: object cleared from stack memory"<< endl;  //kerrotaan, että destructor on tehnyt tehtävänsä
    }

    void play(){ //pelifunktio

        while (true) {  //while -looppi pyörii niin kauan kuin sille sanotaa, että älä pyöri
            cout << "Give your guess between 1-" << maxNumber << endl; //pyydetään arvaamaan numeroita välillä 1-(maxNumber)
            cin >> playerGuess; //ilmoitetaan mitä arvattiin
            numOfGuesses++; //lisätään arvauksiin yksi arvauskerta lisää

            if (playerGuess == randomNumber) { //jos pelaaja arvaa oikein
                cout << "Your guess is right = " << randomNumber << endl; //kerrotaan, että arvattiin oikein ja, että mitä lukua arvattiin
                break;  // Lopeta peli, jos arvaus on oikein
            } else if (playerGuess < randomNumber) { //jos vastaus on liian pieni
                cout << "Your guess is too small" << endl; //kerrotaan, että vastaus on liian pieni
            } else {
                cout << "Your guess is too big" << endl; //muussa tapauksessa kerrotaan, että vastaus on liian suuri
            }
        }

        printGameResult(); //kutsutaan pelin tuloksen kertovaa funktiota

    }

private:
    int maxNumber;
    int playerGuess;
    int randomNumber;
    int numOfGuesses;

    void printGameResult(){ //pelin tuloksen kertova funktio
        cout << "You guessed the right answer = "<< randomNumber << " with "<< numOfGuesses << " guesses" << endl; //kerrotaan, että arvattiin oikein, mitä lukua arvattiin ja montako kertaa arvattiin

    }

protected:

};


#endif // GAME_H
