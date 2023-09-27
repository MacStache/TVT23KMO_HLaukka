#ifndef KERROS_H
#define KERROS_H
#include "asunto.h"

class Kerros{ //Määritellään Kerros -luokka
public:
    Kerros(); //Kerros -luokan konsteruktori
    virtual ~Kerros();
    Asunto *as1, *as2, *as3, *as4; //Kerrosten neljän asunnon oliot
    virtual void maaritaAsunnot(); //virtuaalinen asuntojen määrittelyfunktio
    double laskeKulutus(double); //Kerrosten asuntojen kulutuksen laskemisen funktio
};

#endif // KERROS_H

