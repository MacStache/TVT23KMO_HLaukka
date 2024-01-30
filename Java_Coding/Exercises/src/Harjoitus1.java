import java.util.Scanner;

public class Harjoitus1 {
    public static void main(String[] args) throws Exception {
        Scanner scan = new Scanner(System.in);
        System.out.println("Syötä kokonaisluku 1: ");
        int luku1 = Integer.parseInt(scan.nextLine());
        System.out.println("Syötä kokonaisluku 2: ");
        int luku2 = Integer.parseInt(scan.nextLine());
    
        int summa = luku1 + luku2;
        System.out.println("Lukujen summa on: " + summa);
        int tulo = luku1 * luku2;
        System.out.println("Lukujen tulo on: " + tulo);
        double osamaara = (double)luku1 / (double)luku2;
        System.out.println("Lukujen osamäärä on: " + osamaara);

}
}