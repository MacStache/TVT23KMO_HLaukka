#include <stdio.h>
#include <string.h>

//create struct
typedef struct Phonebook{
    char name[50];
    char number[15];
    char org[50];
} phone;

int main()
{
    //create people
    phone peoples[3];

    strcpy(peoples[0].name, "Henkka Laukka");
    strcpy(peoples[0].number, "0503515356");
    strcpy(peoples[0].org, "OAMK");
    strcpy(peoples[1].name, "Make Haukka");
    strcpy(peoples[1].number, "0401234561");
    strcpy(peoples[1].org, "OAMK");
    strcpy(peoples[2].name, "Tellervo Mutka");
    strcpy(peoples[2].number, "0451122345");
    strcpy(peoples[2].org, "OAMK");
for (int i = 0; i < 3; i++){
    printf("\nHenkilo: (%s, %s), puhelinnumero: %s\n", peoples[i].name, peoples[i].org, peoples[i].number);
}
}

