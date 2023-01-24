#include <stdio.h>

int taulukko[3][3]={ //luodaan taulukko jossa 3 riviä ja 3 saraketta
            {1,5,2},
            {8,9,4},
            {3,7,6}
};
int main()
{
    printf("\n Taulukon 1. rivin luku on %d", taulukko[0][2]); //tulostetaan taulukon ensimmäiseltä riviltä luku 3 (laskeminen alkaa nollasta)
    printf("\n Taulukon 2. rivin luku on %d", taulukko[1][1]); //tulostetaan taulukon toiselta riviltä luku 2
    printf("\n Taulukon 3. rivin luku on %d", taulukko[2][0]); //tulostetaan taulukon kolmannelta riviltä luku 1
    return 0;
}
