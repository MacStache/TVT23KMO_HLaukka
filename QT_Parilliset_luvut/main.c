#include <stdio.h>

int main()
{
    int kokonaisluku;
    int luku = 0;
    printf("Syota luku\n");
    scanf("%d", &kokonaisluku);
    for (int laskuri = 0; laskuri < kokonaisluku; laskuri += 2) {
        luku += 2;
        printf("%d\n", luku);
    }
    return 0;
}
