#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int maxnum;
int luku;
int aluku = 0;

int game(int maxnum) {

    srand(maxnum);
    for (int i=0; i<1; i++){
        int satunnaisluku = 1 + rand() % maxnum;
        cout << "Syota arvattava luku!" << endl;
        cin >> luku;
        if (luku == satunnaisluku) {
            cout << "Oikein!" << endl;
            aluku = aluku + 1;
            return aluku;
        }
        else if (luku <= satunnaisluku){
            cout << "Luku on suurempi!" << endl;
            aluku = aluku + 1;
            game(maxnum);
        }
        else if (luku >= satunnaisluku){
            cout << "Luku on pienempi!" << endl;
            aluku = aluku + 1;
            game(maxnum);
        }
    }
}

int main()
{
    cout << "Syota arvottava maksimiluku" << endl;
    cin >> maxnum;
    game(maxnum);
    cout << "Arvausten maara: " << aluku << endl;

}


