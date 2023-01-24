#include <stdio.h>

int main()
{
    int luku1, luku2;
    printf("\nSyota luku 1: ");
    scanf("%d", &luku1);
    printf("\nSyota luku 2: ");
    scanf("%d", &luku2);
    if (luku1 >= luku2) {
        printf("Syotit luvut %d ja %d joista %d on suurempi.\n\n", luku1, luku2, luku1);
    }
    else if (luku2 >= luku1) {
        printf("Syotit luvut %d ja %d joista %d on suurempi.\n\n", luku1, luku2, luku2);
    }
    return 0;
}
