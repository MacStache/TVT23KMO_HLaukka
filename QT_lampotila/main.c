/*
 * Kylläpä kyllä. Henkka Laukka tässä kirjoittaa koodia. Tämä koodi ei tee yhtään mitään.
*/

#include <stdio.h> //lisätään stdio-kirjasto

int main()
{
    int number1; // Kokonaisluku muuttuja number1
    printf("Enter temperature (celsius): ");
    scanf(" %d", &number1); // Pyydetään käyttäjää ilmoittamaan lämpötila ja tallennetaan se muuttujaksi number1
    int number2 = number1 * 1.8 + 32; // Muutetaan number1 muuttujan celsius asteet number2 (fahrenheit) muotoon
    printf("The temperature you entered is %d (celsius) and %d fahrenheit\n\n", number1, number2); //näytetään number1 muuttuja (celsiusasteet) ja näytetään number2 muuttuja (fahrenheit)
    return 0; //lopettaa ohjelman
}
