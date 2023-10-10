#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QTimer>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);

    //Yhdistetään UI-näppäimet funktioihin
    connect(ui->second, &QPushButton::clicked, this, &MainWindow::setGameTime120);
    connect(ui->minute, &QPushButton::clicked, this, &MainWindow::setGameTime300);
    connect(ui->start, &QPushButton::clicked, this, &MainWindow::startGame);
    connect(ui->stop, &QPushButton::clicked, this, &MainWindow::stopGame);
    connect(ui->switch1, &QPushButton::clicked, this, &MainWindow::switchPlayer1);
    connect(ui->switch2, &QPushButton::clicked, this, &MainWindow::switchPlayer2);

    // Asetetaan alkuarvot
    player1Time = 0; // Pelaajan 1 aika
    player2Time = 0; // Pelaajan 2 aika
    gameTime = 0;   // Peliaika
    currentPlayer = 1; // Ensimmäinen pelaaja

    // Luodaan ja konfiguroidaan gameTimer
    gameTimer = new QTimer(this);
    connect(gameTimer, &QTimer::timeout, this, &MainWindow::timeout);
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::timeout()
{
    // Vähennetään pelaajan aikaa ja päivitetään progressbar
    if (currentPlayer == 1) {
        player1Time--;
    } else {
        player2Time--;
    }
    updateProgressBar();

    // Tarkistetaan, onko peli päättynyt ja kumpi voitti
    if (player1Time >= 0 && player2Time <= 0) {
        // Pelaajan ajastin on nollassa ja peli päättyi, tee tarvittavat toimenpiteet
        gameTimer->stop();
        setGameInfoText("Pelaaja 1 voitti!", 0);
    } else if (player1Time <= 0 && player2Time >= 0) {
        // Pelaajan ajastin on nollassa ja peli päättyi, tee tarvittavat toimenpiteet
        gameTimer->stop();
        setGameInfoText("Pelaaja 2 voitti!", 0);
    }
}

void MainWindow::startGame()
{
    // Luetaan peliaika käyttäjältä ja asetetaan se player1Time ja player2Time muuttujiin
    player1Time = gameTime;
    player2Time = gameTime;
    currentPlayer = 1;

    // Käynnistetään gameTimer
    gameTimer->start(1000); // Päivitetään joka sekuntti

    // Päivitetään pelin tiedot
    setGameInfoText("Pelaaja 1 aloittaa!", player1Time);
    updateProgressBar();
}

void MainWindow::stopGame()
{
    // Pysäytetäään  peli ja nollaa tarvittaessa
    gameTimer->stop();
    setGameInfoText("Valitse peliaika ja paina Start!", 0);
}
void MainWindow::setGameTime120()
{
    gameTime = 120; //Asetetaan peliaika 120 sekuntiin
}

void MainWindow::setGameTime300()
{
    gameTime = 300; //Asetetaan peliaika 300 sekuntiin
}
void MainWindow::switchPlayer1()
{
    //Vaihdetaan pelaaja ja aletaan päivittämään progressbaria
    currentPlayer = 1;
    updateProgressBar();
    gameTimer->start(1000);
    setGameInfoText("Pelaaja 1 vuoro", player1Time);
}

void MainWindow::switchPlayer2()
{
    //Vaihdetaan pelaaja ja aletaan päivittämään progressbaria
    currentPlayer = 2;
    updateProgressBar();
    gameTimer->start(1000);
    setGameInfoText("Pelaaja 2 vuoro", player2Time);
}

void MainWindow::updateProgressBar()
{
    // Päivitetään progressbarit pelaajien jäljellä olevan ajan perusteella
    ui->progressBar1->setValue(player1Time * 100 / gameTime);
    ui->progressBar2->setValue(player2Time * 100 / gameTime);
}

void MainWindow::setGameInfoText(QString text, short timeout)
{
    // Asetetaan pelitiedotteksti ja ajastin sen piilottamiseksi tarvittaessa
    ui->gameInfoText->setText(text);
    if (timeout > 0) {
        QTimer::singleShot(timeout * 1000, [this]() {
            ui->gameInfoText->setText("");
        });
    }
}
