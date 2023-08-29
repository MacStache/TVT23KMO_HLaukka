#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

//alustetaan muuttujat
int maxnum;
int luku;
int aluku = 0;

//Pelifunktio
int game(int maxnum) {

    srand(maxnum);                                  //Alustetaan random number seed käyttäjän antaman maxnum muuttujan mukaan

    for (int i=0; i<1; i++){                        //For looppi, jossa peli pyöritetään (looppiin voidaan lisätä pelikierroksia i<1 kohtaa muokkaamalla) 
        int satunnaisluku = 1 + rand() % maxnum;    /*Pyöräytetään satunnaisluku. Aloitetaan "1+" kohdassa ykkösestä (ettei arvata nollia)
                                                    ja asetetaan maksimiksi käyttäjän syöttämä maxnum. rand() arpoo kaikkien näiden välillä olevien
                                                    väliltä */
        cout << "Syota arvattava luku!" << endl;
        cin >> luku;                                //Käyttäjä syöttää arvauksen
        if (luku == satunnaisluku) {                //Jos käyttäjän luku on sama kuin rand() arpoma luku niin
            cout << "Oikein!" << endl;              //Tulostetaan näytölle "Oikein!"
            aluku = aluku + 1;                      //Lisätään aluku (arvauskerrat) muuttujaan yksi arvaus
            return aluku;                           //Palautetaan aluku main -funktioon
        }
        else if (luku <= satunnaisluku){            //Jos ei mene oikein niin tarkistetaan, että onko luku pienempi kuin satunnaisluku
            cout << "Luku on suurempi!" << endl;    //Jos arvattu luku on pienempi niin kerrotaan, että etsittävä luku on suurempi
            aluku = aluku + 1;                      //Lisätään aluku (arvauskerrat) muuttujaan yksi arvaus
            game(maxnum);                           //Palautaan game -funktion alkuun ja palautetaan sinne taas maxnum -muuttujan sisältö
        }
        else if (luku >= satunnaisluku){            //Jos ei mene oikein niin tarkistetaan, että onko luku suurempi kuin satunnaisluku
            cout << "Luku on pienempi!" << endl;    //Jos arvattu luku on surempi, niin kerrotaan, että etsittävä luku on pienempi
            aluku = aluku + 1;                      //Lisätään aluku (arvauskerrat) muuttujaan yksi arvaus
            game(maxnum);                           //Palautaan game -funktion alkuun ja palautetaan sinne taas maxnum -muuttujan sisältö
        }
    }
}

int main()
{
    cout << "Syota arvottava maksimiluku" << endl;  //Kysytään käyttäjältä maksimiluku, jota arvotaan
    cin >> maxnum;                                  //Otetaan syöte vastaan
    game(maxnum);                                   //Hypätään game -funktioon ja viedään sinne maxnum -muuttujan arvo
    cout << "Arvausten maara: " << aluku << endl;   //Palataan game -funktiosta ja palautetaan sieltä arvausten määrä, joka tulostetaan näytölle

}


