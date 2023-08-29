#include <stdio.h>
void printFunc(char *text);
int main()
{
    char teksti[30] = "tulosta tama teksti";
    printFunc(teksti);
    return 0;
}
void printFunc(char teksti[])
{
    printf("%s", teksti);
}
