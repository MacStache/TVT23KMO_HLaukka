#ifndef GAME_H
#define GAME_H
#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

class Game
{
public:
    Game(int maxNumber)
        : maxNumber(maxNumber), numOfGuesses(0){
        srand(time(0));
        randomNumber = 1 + rand() % maxNumber;
        cout << "GAME CONSTRUCTOR: object initialized with " << maxNumber << " as a maximum value" << endl;
    }
    ~Game(){
        cout << "GAME DESTRUCTOR: object cleared from stack memory"<< endl;
    }

    void play(){

        while (true) {
            cout << "Give your guess between 1-" << maxNumber << endl;
            cin >> playerGuess;
            numOfGuesses++;

            if (playerGuess == randomNumber) {
                cout << "Your guess is right = " << randomNumber << endl;
                break;  // Lopeta peli, jos arvaus on oikein
            } else if (playerGuess < randomNumber) {
                cout << "Your guess is too small" << endl;
            } else {
                cout << "Your guess is too big" << endl;
            }
        }

        printGameResult();

    }

private:
    int maxNumber;
    int playerGuess;
    int randomNumber;
    int numOfGuesses;

    void printGameResult(){
        cout << "You guessed the right answer = "<< randomNumber << " with "<< numOfGuesses << " guesses" << endl;

    }

protected:

};


#endif // GAME_H
