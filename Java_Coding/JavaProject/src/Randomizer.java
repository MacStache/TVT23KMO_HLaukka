import java.util.ArrayList;
import java.util.Random;

public class Randomizer {
   
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();

        names.add("Henkka Laukka");
        names.add("Sanna Mackey");
        names.add("Aaro kallioinen");
        names.add("Maija Björkman");
        names.add("Peetu Rantanen");
        names.add("Jere Jyrinki");
        names.add("Theo Sihvo");
        names.add("Pasi Honka");
        names.add("Johanna Kuikka");
        names.add("Jenni Korhonen");
        names.add("Lari Lepistö");
        names.add("Jaana Ahola");

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
