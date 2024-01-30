import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class RandomizerWInput {
   
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<String> names = new ArrayList<>();

        System.out.println("Please enter filename:");
        String filename = scanner.nextLine();

        Createfile(filename);

        System.out.println("Enter names, one per line."
        + "\nBlank line ends the process."
        + "\n"); 

        while (true) {
            String name = scanner.nextLine();
            if (name.isEmpty()) {
                break;
            }
            names.add(name);
        }

        int rowCounter = 0;
        int ArraySize = names.size();
        
        for (int i = 0; i < ArraySize; i++) {
        Random random = new Random();
        int randomIndex = random.nextInt(names.size());

        if (rowCounter == 4) {
            System.out.println("");
            String nameToWrite = "";
            WriteToFile(filename, nameToWrite);
            rowCounter = 0;
        }
        System.out.println(names.get(randomIndex));
        String nameToWrite = names.get(randomIndex);
        WriteToFile(filename, nameToWrite); 
        names.remove(randomIndex);
        rowCounter++;
        }
    }

    public static void Createfile(String filename) {
        File file = new File(filename + ".txt");
        try {
            if (file.createNewFile()) {
                System.out.println("File created: " + file.getName());
            } else {
                System.out.println("File already exists.");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void WriteToFile(String filename, String nameToWrite) {
        try {
            FileWriter myWriter = new FileWriter(filename + ".txt", true);
            myWriter.write(nameToWrite + "\n");
            myWriter.close();
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}