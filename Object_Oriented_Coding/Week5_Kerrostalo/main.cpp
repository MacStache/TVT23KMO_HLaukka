#include <iostream>
#include "kerrostalo.h"

using namespace std;

int main()
{
    Kerrostalo *olio = new Kerrostalo(); //kutsutaan kerrostalon oliota
    olio->laskeKulutus(1); //laitetaan oli laskemaan kulutus
    delete olio;
    olio = nullptr;
    return 0;
};


