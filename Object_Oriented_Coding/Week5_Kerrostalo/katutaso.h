#ifndef KATUTASO_H
#define KATUTASO_H
#include "kerros.h"

class Katutaso: public Kerros{ //Määritellään Katutaso -luokka joka perii Kerros -luokan ominaisuudet
public:   
    Katutaso(); //Katutaso -luokan konstruktori
    virtual ~Katutaso();
    Asunto *as1, *as2; //Katutason kaksi asunto-oliota
    void maaritaAsunnot() override; //Katutason asuntojen määrittelyfunktio, jonka muuttujat määritellään ylikirjoitettavaksi
    double laskeKulutus(double);  //Katutason asuntojen kulutuksen laskemisen funktio
};

#endif // KATUTASO_H
