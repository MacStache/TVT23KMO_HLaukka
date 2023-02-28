#include <stdio.h>

int main()
{
    FILE *sourceFilePointer;
    FILE *targetFilePointer;
    char currentCharFromFile;

    sourceFilePointer = fopen("C:/Users/henri/Google Drive/Coding/Qt_Harjoitukset/source.txt","r");
    targetFilePointer = fopen("C:/Users/henri/Google Drive/Coding/Qt_Harjoitukset/target.txt","a");
    while((currentCharFromFile = fgetc(sourceFilePointer)) != EOF )
    {
        if (currentCharFromFile == ',')
        {
            fputc(';', targetFilePointer);
        }
        else
        {
            fputc(currentCharFromFile, targetFilePointer);
        }
    }

    fclose(sourceFilePointer);
    fclose(targetFilePointer);
    return 0;
}
