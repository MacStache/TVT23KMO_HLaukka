import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Harjoitus6 {
        public static void main(String[] args) {
            ArrayList<String> names = new ArrayList<>();
            ArrayList<Integer> array1 = new ArrayList<>();
            ArrayList<Integer> array2 = new ArrayList<>();
    
            Collections.addAll(array1, 1,2,3,4,5,6,7,8,9);
            Collections.addAll(array2,2,4,6,8,10,12,14,16,18);

            names.add("John Doe");
            names.add("John Doe");
            names.add("John Doe");
            names.add("John Doe");
            names.add("John Doe");
            names.add("John Doe");
            names.add("John Doe");
            names.add("John Doe");
            names.add("John Doe");
            names.add("John Doe");
    
            names.set (9, "Jack");
            names.set (4, names.get(4) + " Paul");
            names.remove (2);
            names.addFirst ("New Doe");
            names.addFirst ("New Doe");

            System.out.println(names);

            if (names.stream().anyMatch(name -> name.contains("Paul"))) {
                System.out.println("Löytyy!");
            }
            
            for (String name : names) {
                if (name.contains("Paul")) {
                    System.out.println("Löytyy!\n");
                    }
            }

            Collections.sort(names);
            System.out.println(names);
            printSimilarities(array1, array2);
        }

        public static void printSimilarities(List<Integer> list1, List<Integer> list2) {
            long count = list1.stream()
                .filter(list2::contains)
                .count();
            System.out.println("\nNumber of similarities: " + count);
        } 
}
    