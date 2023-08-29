#include <stdio.h>

int main()
{
    int idNumero, suoritus1, suoritus2, suoritus3, yhteensa, keskiarvo;
    char nimi[30];
    printf("\nSyota ID-numerosi: ");
    scanf("%d", &idNumero);
    fflush(stdin);
    printf("\nSyota nimesi: ");
    gets(nimi);
    fflush(stdin);
    printf("\nSyota suoritus 1: ");
    scanf("%d", &suoritus1);
    fflush(stdin);
    printf("\nSyota suoritus 2: ");
    scanf("%d", &suoritus2);
    fflush(stdin);
    printf("\nSyota suoritus 3: ");
    scanf("%d", &suoritus3);
    yhteensa = (float) suoritus1 + suoritus2 + suoritus3;
    keskiarvo = (float) yhteensa/3;
    printf("ID-Numero: %d\n"
           "Opiskelijan nimi: %s\n"
           "Osasuoritus 1: %d\n"
           "Osasuoritus 2: %d\n"
           "Osasuoritus 3: %d\n"
           "Pisteet yhteensa = %d\n"
           "Keskiarvo = %d\n", idNumero, nimi, suoritus1, suoritus2, suoritus3, yhteensa, keskiarvo);
    if (keskiarvo <= 40) {
        printf("Arvosana = Hylatty\n");
    }
    else if (keskiarvo <= 59 && keskiarvo >= 40) {
        printf("Arvosana = Valttava\n");
    }
    else if (keskiarvo <= 79 && keskiarvo >= 60) {
        printf("Arvosana = Hyva\n");
    }
    else if (keskiarvo >= 80) {
        printf("Arvosana = Kiitettava\n");
    }
    return 0;
}
