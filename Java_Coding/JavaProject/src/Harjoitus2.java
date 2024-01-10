import java.util.Scanner;

public class Harjoitus2 {
    public static void main(String[] args) throws Exception { 
        Scanner scan = new Scanner(System.in);
        System.out.println("syötä nimi: ");
        String nimi = scan.nextLine();
        System.out.println("syötä ikä: ");
        int ika = Integer.parseInt(scan.nextLine());
        System.out.println("Hei " + nimi + "! Olet " + ika + " vuotias.");
}
}