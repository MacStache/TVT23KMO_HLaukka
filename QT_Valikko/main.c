#include <stdio.h>

int main()
{
    int valinta = 0;
    printf("Valitse joku seuraavista:\n"
           "1. Nelion kehan pituus\n"
           "2. Ympyran kehan pituus\n"
           "9. lopetus\n");
    scanf("%d", &valinta);
    while (valinta == 1) {
        printf("Valittu nelion kehan pituus.\n");
        return main();
    }
    while (valinta == 2) {
        printf("valittu ympyran kehan pituus.\n");
        return main();
    }
    while (valinta == 9) {
        printf("Ohjelma lopetettu.\n");
        return 0;
    }
    return 0;
}
