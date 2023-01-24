#include <stdio.h>

int main()
{
    int euromaara, loppusumma;
    printf("Syota kuukauden ostosten euromaara: ");
    scanf("%d", &euromaara);
    if (euromaara < 100) {
        loppusumma = euromaara * 0.90;
        printf("Olet ostanut tassa kuussa %d eurolla ja saat niista alennusta 10%. Ostosten loppusumma on %d euroa.\n", euromaara, loppusumma);
    }
    else if (euromaara < 300 && euromaara > 100) {
        loppusumma = euromaara * 0.85;
        printf("Olet ostanut tassa kuussa %d eurolla ja saat niista alennusta 15%. Ostosten loppusumma on %d euroa.\n", euromaara, loppusumma);
    }
    else if (euromaara <500 && euromaara > 300) {
        loppusumma = euromaara * 0.80;
        printf("Olet ostanut tassa kuussa %d eurolla ja saat niista alennusta 20%. Ostosten loppusumma on %d euroa.\n", euromaara, loppusumma);
    }
    else {
        loppusumma = euromaara * 0.75;
        printf("olet ostanut tassa kuussa %d eurolla ja saat niista alennusta 25%. Ostosten loppusumma on %d euroa.\n", euromaara, loppusumma);
    }
    return 0;
}
