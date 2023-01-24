#include <stdio.h> //lisätään stdio-kirjasto

int main()
{
   int kanta;
   int korkeus;
   printf("Please enter width of a triangle: "); //Pyydetään kolmion kanta
   scanf(" %d", &kanta);
   printf("Please enter height of a triangle: "); //Pyydetään kolmion korkeus
   scanf(" %d", &korkeus);
   int ala = kanta * korkeus / 2; //kerrotaan kolmion kanta ja korkeus toisillaan ja jaetaan tulos kahdella
   printf("The size of the triangle is %d\n\n", ala); //tulostetaan kolmion pinta-ala
   return 0;
}
