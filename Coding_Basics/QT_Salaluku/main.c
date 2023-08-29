#include <stdio.h>

int main()
{
    int salaluku = 0;
    while (salaluku != 17) {
        printf("Syotatko salaluvun?\n");
        scanf("%d", &salaluku);
    }
    printf("Onnittelut valinnasta!\n");
    return 0;
}
