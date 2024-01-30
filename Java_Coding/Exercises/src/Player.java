import java.util.Scanner;

public class Player {
    private String name;
    private int points;

    public Player(String name, int points) {
        this.name = name;
        this.points = points;
    }
    public Player() {
        this("Player", 0);
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPoints() {
        return this.points;
    }

    public void setPoints(int points) {
            if (points <= 0) {
                this.points = 0;
            }
    }
    public static void main(String[] args){
        Player player1 = new Player();
        Player player2 = new Player("Player 2", 0);
        
        startGame(player1);
        startGame2(player1);
        startGame3(player2);

    }
    public static void startGame(Player player){
        getInfo(player);
    }

    public static void startGame2(Player player){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Please enter name:");
        player.setName(scanner.nextLine());
        
        int points;
        do { System.out.println("Please enter points:");
        points = Integer.parseInt(scanner.nextLine());
            if (points <=0) {
                System.out.println("Please enter a positive number:");
            }
        } while (points <= 0); 
        player.setPoints(points);
        getInfo(player);
        scanner.close();
    }
    
    public static void startGame3(Player player){
        player.setName("Player 2");
        player.setPoints(-10);
        getInfo(player);
    }

    public static void addPoints(Player player, int points){
        if (points > 0) {
            player.setPoints(player.getPoints() + points);
        }
    }

    public static void getInfo(Player player){
        System.out.println(player.getName() + " has " + player.getPoints() + " points.");
    }
}
