import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Harjoitus7 {
    
        public static void main(String[] args) {
            Map<String, String> namesAndNicknames = new HashMap<>();
            Scanner scanner = new Scanner(System.in);
    
            for (int i = 0; i < 5; i++) {
                System.out.println("Enter name:");
                String name = scanner.nextLine();
    
                System.out.println("Enter nickname:");
                String nickname = scanner.nextLine();
    
                namesAndNicknames.put(name, nickname);
            }
            
            System.out.println("Enter name:");
                String nimi = scanner.nextLine();
            if (namesAndNicknames.containsKey(nimi)) {
                System.out.println("Nickname: " + namesAndNicknames.get(nimi));
            } else {
                System.out.println("Name not found.");
            }
            
            System.out.print(namesAndNicknames);
        }
    }
