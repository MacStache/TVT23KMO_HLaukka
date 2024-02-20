package com.example.quiz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Collections;
import java.util.ArrayList;
import java.util.Map;

@SpringBootApplication
@RestController
public class QuizApplication {

    private Map<String, String> questions = new HashMap<>();
    private List<String> answeredQuestions = new ArrayList<>(); // Luodaan lista vastatuille kysymyksille

    private Player player = new Player(); // Luodaan pelaaja

    public static void main(String[] args) {
        SpringApplication.run(QuizApplication.class, args);
    }

    public QuizApplication() {
        // Lisätään muutamia esimerkkikysymyksiä ja vastauksia
        questions.put("Missä pelisarjassa pelataan Link -nimisellä hahmolla?", "The Legend of Zelda");
        questions.put("Kuka on suunnitellut muun muassa Fallout ja Elder Scrolls pelisarjojen pelejä?", "Todd Howard");
        questions.put("Minkä väriset housut Super Mariolla on?", "Siniset");
        questions.put("Mikä on maailman myydyin videopeli?", "Minecraft");
        questions.put("Mikä on maailman myydyin pelikonsoli?", "PlayStation 2");
        questions.put("Mikä on maailman myydyin pelisarja?", "Mario");
        questions.put("Mikä lääkealan yritys on vastuussa zombiemutaatiosta Resident Evil -pelisarjassa?", "Umbrella");
        questions.put("Mikä on maailman suosituin peli?", "Fortnite");
    }

    //Visailupeli
    @GetMapping("/")
    public String getInfo() {
        return "Tervetuloa visailu-peliin! Käytä endpointteja /question nähdäksesi kysymyksen ja /answer vastataksesi niihin.";
    }

    //Backendi arpoo sattumanvaraisen kysymyksen questions -arraystä. Jos kaikki kysymykset on jo kysytty, palauttaa "Kaikki kysymykset on jo kysytty!"
    //Toiminta: 
    //Kysymys: localhost:8080/question
    //Kysymys tietyllä id:llä: localhost:8080/question/0
    //Vastaus: localhost:8080/answer?question=Kysymys&answer=Vastaus
    //Pisteet: localhost:8080/points
    
    @GetMapping("/question")
    public Map<String, String> getQuestion() {
        // Luodaan avainlista
        List<String> keys = new ArrayList<>(questions.keySet());
        // Sekoitetaan avainlista
        Collections.shuffle(keys);
        // Etsitään kysymys, johon ei ole vielä vastattu
        String nextQuestion = null;
        for (String key : keys) {
            if (!answeredQuestions.contains(key)) {
                nextQuestion = key;
                // Lisätään kysymys listaan vastattujen kysymysten seurantaa varten
                answeredQuestions.add(nextQuestion);
                break;
            }
        }
        //Luodaan mappaus, johon tallennetaan kysymys ja palautetaan se 
        Map<String, String> questionMap = new HashMap<>();
        if (nextQuestion != null) {
            questionMap.put("question", nextQuestion);
        } else {
            //Tulostetaan viesti pelin loppumisesta sekä pelaajan pistemäärä
            questionMap.put("question", "Peli loppui! Pistemääräsi: " + player.getScore());
        }
        return questionMap;
    }

    // Kysymyksen haku id:n perusteella
    @GetMapping("/question/{id}")
    public Map<String, String> getQuestionById(@PathVariable String id) {
        Map<String, String> questionMap = new HashMap<>();
        questionMap.put("question", questions.keySet().toArray()[Integer.parseInt(id)].toString());
        return questionMap;
    }

    //Pelaajan pisteiden haku
    @GetMapping("/points")
    public int getPlayerPoints() {
        return player.getScore();
    }

    // Vastausmekanismi 
    @PostMapping("/answer")
    public String checkAnswer(@RequestParam String question, @RequestParam String answer) {
        if (questions.containsKey(question)) {
            if (questions.get(question).equalsIgnoreCase(answer)) {
                player.incrementScore(); // Kasvatetaan pelaajan pistemäärää oikean vastauksen saadessa
                return "Oikein!";
            } else {
                return "Väärin!";
            }
        } else {
            return "Kysymystä ei löytynyt.";
        }
    }

    // Pelaaja-olio-luokka-hahmo
    class Player {
        private int score;

        public Player() {
            this.score = 0;
        }

        public void incrementScore() {
            this.score++;
        }

        // Getter ja setter pistemäärälle, everyday I'm gettin and settin
        public int getScore() {
            return score;
        }

        public void setScore(int score) {
            this.score = score;
        }
    }
}
