#include <chefs.h>

int main()
{
    Chef chef("Chef Gordon Ramsay");  //Annetaan kokille nimi

    chef.makeSalad(); //Käsketään kokin tehdä sapuskaa
    chef.makeSoup();

    ItalianChef italianChef("Chef Anthony Bourdain", 100, 250); //Annetaan italialaiselle kokille nimi sekä asetetaan oletus vesi- ja jauhomäärä
    int vesimaara; //luodaan muuttujat käyttäjäsyötteelle
    int jauhomaara;

    cout << "Flour is set at " << italianChef.getJauho() << "! Give new amount of flour:" <<endl; //ilmoitetaan käyttäjälle, että paljonko jauhoja on asetettu oletukseksi. Haetaan oletusarvo italianChef.getJauho funktiolla
    cin >> jauhomaara;  //otetaan sisään käyttäjän asettama uusi jauhomäärä ja talletetaan se muttujaan
    italianChef.setJauho(jauhomaara); //viedään jauhomäärä italianChef.setJauho -funktiolla eteenpäin
    cout << "Water is set at " << italianChef.getVesi() << "! Give new amount of water:" <<endl; //tehdään vedelle sama kuin yllä
    cin >> vesimaara;
    italianChef.setVesi(vesimaara);

    italianChef.makeSalad(); //Käsketään italialaisen kokin tehdä sapuskaa
    italianChef.makePasta(jauhomaara, vesimaara);

    return 0;
}
