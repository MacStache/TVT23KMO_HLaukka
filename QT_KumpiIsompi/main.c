#include <stdio.h>
void vertaile();
int main()
{
    vertaile();
    return 0;
}
void vertaile()
{
    int luku1, luku2;
    printf("Syotatko kaksi lukua:");
    scanf("%d", &luku1);
    scanf("%d", &luku2);
    if (luku1 <= luku2)
        printf("%d, %d\n", luku2, luku1);

    if (luku1 >= luku2)
        printf("%d, %d\n", luku1, luku2);
    return main;
}
