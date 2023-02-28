#include <stdio.h>
void lue();
void luvunTulostus();
int kokonaisluku;
int main()
{
    lue();
    luvunTulostus();
    return 0;
}
void lue()
{
    printf("Anna kokonaisuluku!\n");
    scanf("%d", &kokonaisluku);
    return main;
}
void luvunTulostus()
{
    printf("%d\n", kokonaisluku);
}

