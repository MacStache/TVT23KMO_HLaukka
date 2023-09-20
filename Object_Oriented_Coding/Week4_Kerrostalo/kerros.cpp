#include <iostream>
#include "kerros.h"

using namespace std;

Kerros::Kerros(){ //luodaan kerros
    //cout << "Kerros luotu" << endl;
};

void Kerros::maaritaAsunnot(){ //Määritellään kerroksen asunnot
    cout << "maaritetaan 4kpl kerroksen asuntoja" << endl;
    as1.maarita(2,100); //Koska kaaviossa ei ollut määritelty tätä funktiota ottamaan sisään muuttujia niin nämä on tässä manuaalisesti. Ensimmäinen on asukas- ja toinen neliömäärä
    as2.maarita(2,100);
    as3.maarita(2,100);
    as4.maarita(2,100);
};

double Kerros::laskeKulutus(double h){ //lasketaan kerroksen neljän asunnon kulutus
    double kulutus1 = as1.laskeKulutus(h);
    double kulutus2 = as2.laskeKulutus(h);
    double kulutus3 = as3.laskeKulutus(h);
    double kulutus4 = as4.laskeKulutus(h);

    double kek = kulutus1 + kulutus2 + kulutus3 + kulutus4;

    //cout << "Kerroksen kokonaiskulutus, kun hinta= " << h << " on " << kek << endl;

    return kek;
};
