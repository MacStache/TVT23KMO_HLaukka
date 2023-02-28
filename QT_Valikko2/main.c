#include <stdio.h>

void nelioLasku()
{
    int kehanPituus, sivunPituus;
    printf("Syota kehan pituus:\n");
    scanf("%d", &sivunPituus);
    kehanPituus = 4 * sivunPituus;
    printf("Kehan pituus on %d\n", kehanPituus);
}
void ympyraLasku()
{
    int ympyranSade, ympyranKeha;
    printf("Syota ympyran sade:\n");
    scanf("%d", &ympyranSade);
    ympyranKeha = 2 * 3.14 * ympyranSade;
    printf("Ympyran keha on %d\n", ympyranKeha);
}

int main()
{
    int valinta = 0;
    printf("Valitse joku seuraavista:\n"
           "1. Nelion kehan pituus\n"
           "2. Ympyran kehan pituus\n"
           "9. lopetus\n");
    scanf("%d", &valinta);
    while (valinta == 1) {
        nelioLasku();
        return main();
    }
    while (valinta == 2) {
        ympyraLasku();
        return main();
    }
    while (valinta == 9) {
        printf("Ohjelma lopetettu.\n");
        return 0;
    }
    return 0;
}
