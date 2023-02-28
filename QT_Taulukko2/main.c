#include <stdio.h>
#include <stdlib.h>
int main()
{
    char luku1[30];
    char luku2[30];
    int kokonaisluku;
    double murtoluku;
    char yhteensa;
    printf("Syota kokonaisluku:");
    scanf("%s", &luku1);
    printf("Syota murtoluku:");
    scanf("%s", &luku2);
    kokonaisluku=atoi(luku1);
    murtoluku=atof(luku2);
    yhteensa = kokonaisluku + murtoluku;
    printf("%d", yhteensa);

    return 0;
}


