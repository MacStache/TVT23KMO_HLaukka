#include <iostream>
#include "kerrostalo.h"

using namespace std;

Kerrostalo::Kerrostalo(){ //luodaan kerrostalo
    eka.maaritaAsunnot();
    //cout << "katutaso luotu" <<endl;
    toka.maaritaAsunnot();
    //cout << "toinen kerros luotu" <<endl;
    kolmas.maaritaAsunnot();
    //cout << "kolmas kerros luotu" <<endl;
    //cout << "Kerrostalo luotu"<<endl;
};

double Kerrostalo::laskeKulutus(double h){ //lasketaan koko kerrostalon jokaisen kerroksen kulutus yhteen
    double katutasoKulutus = eka.laskeKulutus(h);
    double kerrosKulutus = toka.laskeKulutus(h) + kolmas.laskeKulutus(h);
    double kokonaiskulutus = kerrosKulutus + katutasoKulutus;

    cout << "kerrostalon kokonaiskulutus, kun hinta = " <<h<< " on " << kokonaiskulutus << endl;
    return kokonaiskulutus;
};
