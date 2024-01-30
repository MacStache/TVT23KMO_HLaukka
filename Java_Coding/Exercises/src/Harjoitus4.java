import java.util.Scanner;

public class Harjoitus4 {
    public static void main(String[] args) throws Exception {
        Scanner scan = new Scanner(System.in);
        final double rate = .9855;
        System.out.println("Syötä dollarimäärä: ");
        int dollari = Integer.parseInt(scan.nextLine());
       
        System.out.println("Dollarien arvo euroissa: " + (double)dollari * rate);
}
}