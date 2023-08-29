#include <stdio.h>
#include <string.h>

typedef struct Car{
    char brand[20];
    char model[50];
    int yearModel;
} car;
int main()
{
    char merkki[20];
    car cars[3];
    for (int i = 0; i < 3; i++) {

    printf("Mika merkki? ");
    gets(cars[i].brand);
    fflush(stdin);
    printf("Mika malli? ");
    gets(cars[i].model);
    fflush(stdin);
    printf("Mika vuosi? ");
    scanf("%d", &cars[i].yearModel);
    fflush(stdin);
    }

    for (int i = 0; i < 3; i++) {
    printf("\nCar %d (%s, %s, %d)", i, cars[i].brand, cars[i].model, cars[i].yearModel);
    }
}
