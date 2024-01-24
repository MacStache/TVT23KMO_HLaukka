import java.util.ArrayList;
import java.util.Random;

public class Randomizer {
   
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();

        names.add("Henkka Laukka");
        names.add("Jooseppi Joukahainen");
        names.add("Jaska Jantteri");
        names.add("Teppo Testi");
        names.add("Matti Meikäläinen");
        names.add("Maija Meikäläinen");
        names.add("Mikko Mallikas");
        names.add("Aila Antelias");
        names.add("Pekka Pouta");
        names.add("Jorma Jormalainen");
        names.add("Kerma Kermalainen");
        names.add("Kalle Kalamies");

        for (int i = 0; i < 12; i++) {
        
        Random random = new Random();
        int randomIndex = random.nextInt(names.size());

        if (i == 4 || i == 8) {
            System.out.println(" ");
        }

        System.out.println(names.get(randomIndex));
        names.remove(randomIndex);
        
        }

    }

}
