#include <iostream>
#include "katutaso.h"

using namespace std;

Katutaso::Katutaso(){ //Luodaan katutaso
    // cout << "Katutaso luotu" << endl;
};

void Katutaso::maaritaAsunnot(){ //Määritellään katutason asunnot
    cout << "maaritetaan 2kpl katutason asuntoja" << endl;
    as1.maarita(2,100); //Koska kaaviossa ei ollut määritelty tätä funktiota ottamaan sisään muuttujia niin nämä on tässä manuaalisesti. Ensimmäinen on asukas- ja toinen neliömäärä
    as2.maarita(2,100);
    Kerros::maaritaAsunnot(); //Kutsutaan kerroksen asuyntojen määrittelyfunktiota jolta peritään lisää asuntoja
};

double Katutaso::laskeKulutus(double h){ //Lasketaan katutason kahden asunnon kulutus + kerroksen neljän asunnon kulutus
    double kulutus1 = as1.laskeKulutus(h);
    double kulutus2 = as2.laskeKulutus(h);

    double kk = kulutus1 + kulutus2 + Kerros::laskeKulutus(h);

    //cout <<"Katutason kokonaiskulutus, kun hinta= "<<h<<" on "<<kk<<endl;

    return kk;
};
