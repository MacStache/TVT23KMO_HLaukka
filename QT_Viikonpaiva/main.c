#include <stdio.h>

int main()
{
    int viikonpaiva;
    printf("Syota viikonpaivan numero: ");
    scanf("%d", &viikonpaiva);
    if (viikonpaiva == 1) {
        printf("Viikonpaiva on maanantai!\n");
    }
    else if (viikonpaiva == 2) {
        printf("Viikonpaiva on tiistai!\n");
    }
    else if (viikonpaiva == 3) {
        printf("Viikonpaiva on keskiviikko!\n");
    }
    else if (viikonpaiva == 4) {
        printf("Viikonpaiva on torstai!\n");
    }
    else if (viikonpaiva == 5) {
        printf("Viikonpaiva on perjantai!\n");
    }
    else if (viikonpaiva == 6) {
        printf("Viikonpaiva on lauantai!\n");
    }
    else if (viikonpaiva == 7) {
        printf("Viikonpaiva on sunnuntai!\n");
    }
    else if (viikonpaiva >= 7) {
        printf("Annoit luvun, jolle ei ole viikonpaivaa!\n");
    }
    return 0;
}
