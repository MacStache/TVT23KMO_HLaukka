#ifndef KERROSTALO_H
#define KERROSTALO_H
#include "katutaso.h"
#include "kerros.h"

class Kerrostalo{ //Määritellään Kerrostalo -luokka
public:
    Kerrostalo(); //Luokan konstruktori
    virtual ~Kerrostalo();
    double laskeKulutus(double); //koko kerrostalon asuntojen kulutuksen laskemisen funktio

private:
    Katutaso *eka; //Katutason olio
    Kerros *toka, *kolmas; //kerrosten oliot

};

#endif // KERROSTALO_H
