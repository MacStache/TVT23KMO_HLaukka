#include <stdio.h>
void floatLuku();
float luku;
int main()
{
    floatLuku();
    printf("%f\n", luku);
    return 0;
}
void floatLuku()
{
    printf("Anna kokonaisluku:");
    scanf("%f", &luku);
    luku = luku * 3;
    return main;
}
