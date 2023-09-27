#ifndef ASUNTO_H
#define ASUNTO_H


class Asunto{ //Määritellään Asunto -luokka

public:
    Asunto(); //Asunto -luokan konstruktori
    void maarita(int,int); //luodaan asunnon määrittelyfunktio
    double laskeKulutus(double); //luodaan kulutuksen laskemiseen tarkoitettu funktio
    int asukasmaara; //luodaan muuttuja asukasmäräälle
    int neliot; //luodaan muuttuja neliömäärälle
};

#endif // ASUNTO_H
