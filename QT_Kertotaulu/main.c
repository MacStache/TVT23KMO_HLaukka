#include <stdio.h>

int main()
{
    int luku = 0;
    int summa = 0;
    //int kertotaulu[9] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    printf("Syötä luku joka kerrotaan!\n");
    scanf("%d", &luku);
    for (int kertoluku = 0; kertoluku < 11; kertoluku++) {
        summa = luku * kertoluku;
        printf("%d*%d=%d\n", luku, kertoluku, summa);
    }
    return 0;
}
