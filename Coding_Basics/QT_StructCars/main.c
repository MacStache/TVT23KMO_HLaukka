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
    car car_1;
    printf("Mika merkki? ");
    gets(car_1.brand);
    fflush(stdin);
    printf("Mika malli? ");
    gets(car_1.model);
    fflush(stdin);
    printf("Mika vuosi? ");
    scanf("%d", &car_1.yearModel);
    printf("\nCar 1 (%s, %s, %d)",
    car_1.brand, car_1.model, car_1.yearModel);
}
