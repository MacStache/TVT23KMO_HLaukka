#include <stdio.h>

int main()
{

FILE *filepointer;
filepointer=fopen("C:/Users/henri/Google Drive/Coding/Qt_Harjoitukset/QT_NimiTiedostoon/nimi.txt","w");

printf("Syötä nimi:\n");
char nimi[50];
scanf("%s", &nimi);
fprintf(filepointer, "%s", nimi);
fclose(filepointer);

return 0;
}
