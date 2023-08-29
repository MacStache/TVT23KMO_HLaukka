#include <stdio.h>

int main()
{
    FILE *sourceFilePointer;
    char currentCharFromFile;
    int sanaMaara = 0;
    int riviMaara = 0;

    sourceFilePointer = fopen("C:/Users/henri/Google Drive/Coding/Qt_Harjoitukset/kirjaimia.txt","r");
    while((currentCharFromFile = fgetc(sourceFilePointer)) != EOF )
    {
        if (currentCharFromFile == ' ') {
            sanaMaara ++;
        }
        else if (currentCharFromFile == '\n')
            riviMaara ++;
    }
    printf("Sanoja tiedostossa: %d\nRiveja tiedostossa: %d\n", sanaMaara, riviMaara);


    fclose(sourceFilePointer);
    return 0;
}
