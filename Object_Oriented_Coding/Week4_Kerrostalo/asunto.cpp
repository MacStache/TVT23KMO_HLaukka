#include <iostream>
#include "asunto.h"

using namespace std;

Asunto::Asunto(){ //Luodaan asunto
    //cout << "Asunto luotu" << endl;
};

void Asunto::maarita(int a, int n){ //määritellään asuntojen asukasmäärä ja neliöt
    asukasmaara = a;
    neliot = n;
    cout << "Asunto maaritetty asukkaita= "<<asukasmaara<<" nelioita= "<<neliot<<endl;
};

double Asunto::laskeKulutus(double h){ //lasketaan asunnon kulutus hinnan, asukasmäärän ja neliöiden mukaan
    double kulutus = h * asukasmaara * neliot;
    //cout <<"Asunnon kulutus, kun hinta= "<<h<<" on "<<kulutus<<endl;
    return kulutus;
};
