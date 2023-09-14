#ifndef CHEFS_H
#define CHEFS_H
#include <iostream>
#include <cstdlib>
#include <string>

using namespace std;

class Chef { //Chef luokan startti
private:
    string name; //nimi on salainen.

public:
    Chef(string name) : name(name) { //kokin konstruktori
        cout << name << " konstruktori" << endl;
    }

    ~Chef() { //kokin destruktori
        cout << name << " destruktori"  << endl;
    }

    void makeSalad() { //kokin salaattifunktio
        cout << name << " makes salad" << endl;
    }

    void makeSoup() {  //kokin soppafunktio
        cout << name << " makes soup" << endl;
    }
    string getName() {  //string getname palauttaa muilla luokille kokin salaisen nimen
        return name;
    }
};

class ItalianChef : public Chef { //italialaisen kokin luokan startti, peritään kokilta julkiset ominaisuudet
public:
    ItalianChef(string name, int vesimaara, int jauhomaara) : Chef(name), vesi(vesimaara), jauhot(jauhomaara) { //italialaisen kokin konstruktori jossa mukana vesimäärät ja jauhomäärät sekä kokilta peritty nimi

    }
    ~ItalianChef(){ //italialaisen kokin destruktori

    }
    string getName() { //getName funktio, joka hakee Chef -luokasta kokin nimen
        return Chef::getName();
    }

    void makePasta(int jauhot, int vesi) { //kokki kokkaa pastaa salaisella reseptillä
        cout << getName() << " makes pasta with special recipe:" << endl;
        cout << getName() << " uses flour = " << jauhot << endl;
        cout << getName() << " uses water = " << vesi << endl;
    }
    int getVesi() const { //getteri, joka palauttaa salaisen vesimäärän
        return vesi;
    }

    void setVesi(int vesimaara) { //setteri, joka asettaa uuden määrän vettä salaiseen reseptiin
        vesi = vesimaara;
    }
    int getJauho() const { //getteri, joka palauttaa salaisen jauhomäärän
        return jauhot;
    }

    void setJauho(int jauhomaara) { //setteri, joka asettaa uuden määrän vettä salaiseen reseptiin
        jauhot = jauhomaara;
    }

private:
    int vesi; //TOP SECRET RESEPTIN VESIMÄÄRÄ
    int jauhot; //TOP SECRET RESEPTIN JAUHOMÄÄRÄ
};

#endif // CHEFS_H
