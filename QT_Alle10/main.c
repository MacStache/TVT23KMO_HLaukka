#include <stdio.h>

int main()
{
    int luku;
    printf(" Syota luku:");
    scanf("%d", &luku);
    if (luku <= 10) {
            printf("\n Annoit luvun, joka on pienempi kuin 10!\n\n");
    }
    else {
            printf("\n Annoit luvun, joka on suurempi kuin 10!\n\n");
    }
    return 0;
}
