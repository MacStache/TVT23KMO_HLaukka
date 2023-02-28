#include <stdio.h>
#include <string.h>

char nimi;
int main()
{
    
FILE *filepointer;
filepointer=fopen("C:/Users/henri/Google Drive/Coding/Qt_Harjoitukset/QT_NimiTiedostoon/nimi.txt","w");

printf("Syötä nimi:\n");
fscanf(filepointer, "%d", &nimi);

printf("%s", filepointer);

fclose(filepointer);

return 0;
}
