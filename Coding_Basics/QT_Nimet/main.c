#include <stdio.h>

int main()
{
    int nimet = 0;
    int maksimi = 0;
    char nimi[30];
    printf("Antaisitko nimen? ");
    gets(nimi);
    fflush(stdin);
    printf("Monestiko tulostetaan? ");
    scanf("%d", &maksimi);
    fflush(stdin);
    do {
    printf("%s\n", nimi);
    nimet ++;
    } while (nimet < maksimi);

    int nimet2 = 0;
    int maksimi2 = 0;
    char nimi2[30];
    printf("Antaisitko nimen? ");
    gets(nimi2);
    fflush(stdin);
    printf("Monestiko tulostetaan? ");
    scanf("%d", &maksimi2);
    fflush(stdin);
    while (nimet2 < maksimi2) {
    printf("%s\n", nimi2);
    nimet2 ++;
    }

    int maksimi3 = 0;
    char nimi3[30];
    printf("Antaisitko nimen? ");
    gets(nimi3);
    fflush(stdin);
    printf("Monestiko tulostetaan? ");
    scanf("%d", &maksimi3);
    fflush(stdin);
    for (int nimet3 = 0; nimet3 < maksimi3; nimet3++) {
        printf("%s\n", nimi3);
    }
    return 0;
}
