#include <stdio.h>
#include <string.h>

typedef struct Student{
    char name[50];
    int age;
    int id;
} student;

int main()
{
    FILE *targetFilePointer;
    targetFilePointer = fopen("C:/temp/students_data.txt","w");
    if (targetFilePointer == NULL)
        {
            printf("Error opening the file %s", targetFilePointer);
            return -1;
        }

    int valinta = 0;
    char name[50];
    student students[5];
    for (int i = 0; i < 5; i++) {

    printf("Nimi? ");
    gets(students[i].name);
    fflush(stdin);
    printf("Ika? ");
    scanf("%d", &students[i].age);
    fflush(stdin);
    printf("Id? ");
    scanf("%d", &students[i].id);
    fflush(stdin);
    printf("\n");
    }

    for (int i = 0; i < 5; i++){
    printf("\n----- Print out Students -----\n");
    printf("Nimi: %s \n", students[i].name);
    printf("-- %d --\n", students[i].age);
    printf("-- %d --\n\n", students[i].id);
    }

    printf("Haluatko tallentaa oppilaat tiedostoon?\n1: Kylla\n2: Ei\n9: Lopeta\n");
    scanf("%d", &valinta);

    while (valinta == 1) {

        for (int i = 0; i < 5; i++){
                fprintf(targetFilePointer, students[i].name);
                fprintf(targetFilePointer, ", ");
                fprintf(targetFilePointer, "%d", students[i].age);
                fprintf(targetFilePointer, ", ");
                fprintf(targetFilePointer, "%d", students[i].id);
                fprintf(targetFilePointer, "\n");

            }
        printf("Oppilastiedot tallennettu.\n");
        return 0;
    }
    while (valinta == 2) {
        printf("Ohjelma lopetettu tallentamatta.\n");
    return 0;
    }
    while (valinta == 9){
        printf("Ohjelma lopetettu.\n");
        return 0;
    }

    fclose(targetFilePointer);
    return 0;
}
