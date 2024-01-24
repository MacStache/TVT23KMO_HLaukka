import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class RandomizerWInput {
   
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<String> names = new ArrayList<>();

        System.out.println("Enter names, one per line. Blank line ends:");
        while (true) {
            String name = scanner.nextLine();
            if (name.isEmpty()) {
                break;
            }
            names.add(name);
        }

        int ArraySize = names.size();
        
        for (int i = 0; i < ArraySize; i++) {
        
        Random random = new Random();
        int randomIndex = random.nextInt(names.size());

        if (i == 4 || i == 8) {
            System.out.println("");
        }

        System.out.println(names.get(randomIndex));
        names.remove(randomIndex);
        
        }

    }

}