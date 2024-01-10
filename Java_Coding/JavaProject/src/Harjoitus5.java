import java.util.Scanner;

public class Harjoitus5 {
    public static void main(String[] args) throws Exception {
        Scanner scan = new Scanner(System.in);
        System.out.println("Syötä pituus: ");
        double pituus = Integer.parseInt(scan.nextLine());
        System.out.println("Syötä paino: ");
        double paino = Integer.parseInt(scan.nextLine());
        System.out.println("Painoindeksi on: " + paino / (pituus * pituus * 0.0001));
}
}