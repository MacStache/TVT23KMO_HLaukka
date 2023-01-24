#include <stdio.h>

int main()
{
    int lapset, karkit, jako, jaljella;
    printf("Syota karkkien lukumaara!\n"); //Syötetään karkkien lukumäärä ja tallennetaan se muuttujaan karkit
    scanf(" %d", &karkit);
    printf("Syota lasten lukumaara!\n"); //Syötetään lasten lukumäärä ja tallennetaan se muuttujaan lapset
    scanf(" %d", &lapset);
    jako = karkit / lapset; //lasketaan montako karkkia kukin lapsi saa
    jaljella = karkit % lapset; //lasketaan montako karkkia jää jäljelle

    //tulostetaan aiemmin lasketut uudet muuttujat
    printf("Karkkeja jokaiselle lapselle %d\n", jako); //tulostetaan montako karkkia jokaiselle
    printf("Karkkeja on viela jaljella %d\n", jaljella); //tulostetaan jakojäännös
    return 0;
}

