#include <stdio.h>

int main()
{
    int luku1;
    int luku2;
    printf("Syota luku 1!\n"); //Syötetään luku 1 ja tallennetaan se muuttujaksi luku1
    scanf(" %d", &luku1);
    printf("Syota luku 2!\n"); //Syötetään luku 2 ja tallennetaan se muuttujaksi luku2
    scanf(" %d", &luku2);
    int summa = luku1 + luku2; //lasketaan muuttujien luku1 ja luku2 summa
    int erotus = luku1 - luku2; //lasketaan muuttujien luku1 ja luku2 erotus
    int tulo = luku1 * luku2; //lasketaan muuttujien luku1 ja luku2 tulo
    int osamaara = luku1 / luku2; //lasketaan muuttujien luku1 ja luku2 erotus osamäärä

    //tulostetaan aiemmin lasketut uudet muuttujat

    printf("Lukujen summa on %d\n", summa);
    printf("Lukujen erotus on %d\n", erotus);
    printf("Lukujen tulo on %d\n", tulo);
    printf("Lukujen osamaara on %d\n", osamaara);
    return 0;
}
