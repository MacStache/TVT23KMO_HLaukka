#include <stdio.h>
#include <string.h>

typedef struct Car{
    char brand[20];
    char model[50];
    int yearModel;
} car;
int main()
{
    char brand[20];
    car cars[5];
    for (int i = 0; i < 5; i++) {

    printf("Brand? ");
    gets(cars[i].brand);
    fflush(stdin);
    printf("Model? ");
    gets(cars[i].model);
    fflush(stdin);
    printf("Year? ");
    scanf("%d", &cars[i].yearModel);
    fflush(stdin);
    }
do
{
    printf("\n----- Search for Brand -----\n");
    printf("Brand: \n");
    scanf("%s", brand);
    printf("-- %s --", brand);
    for (int i = 0; i < 5; i++){
        if ( strcmp(brand, cars[i].brand) == 0 ) {
            printf("Brand: %s\n", cars[i].brand);
            printf("Model: %s\n", cars[i].model);
            printf("Year: %d\n", cars[i].yearModel);
        }
    }
} while ( strcmp(brand, "LOPETA") != 0 );
return 0;
}
