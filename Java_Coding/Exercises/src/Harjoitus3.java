import java.util.Scanner;

public class Harjoitus3 {
    public static void main(String[] args) throws Exception {
        Scanner scan = new Scanner(System.in);
        System.out.println("Syötä kokonaisluku 1: ");
        int luku1 = Integer.parseInt(scan.nextLine());
        System.out.println("Syötä kokonaisluku 2: ");
        int luku2 = Integer.parseInt(scan.nextLine());
        
        int summa = luku1 + luku2;
        int tulo = luku1 * luku2;
        double osamaara = (double)luku1 / (double)luku2;

        System.out.println( luku1 + "+" + luku2 + "=" + summa);
        System.out.println( luku1 + "*" + luku2 + "=" + tulo);
        System.out.println( luku1 + "/" + luku2 + "=" + osamaara);
}
}