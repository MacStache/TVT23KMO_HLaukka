#include "mainwindow.h"
#include "ui_mainwindow.h"

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
    state = 1; //State asetetaan ykköseen
    //Alla yhdistetään napit clickhandleriin
    connect(ui->N0, &QPushButton::clicked, this, &MainWindow::numberClickedHandler);
    connect(ui->N1, &QPushButton::clicked, this, &MainWindow::numberClickedHandler);
    connect(ui->N2, &QPushButton::clicked, this, &MainWindow::numberClickedHandler);
    connect(ui->N3, &QPushButton::clicked, this, &MainWindow::numberClickedHandler);
    connect(ui->N4, &QPushButton::clicked, this, &MainWindow::numberClickedHandler);
    connect(ui->N5, &QPushButton::clicked, this, &MainWindow::numberClickedHandler);
    connect(ui->N6, &QPushButton::clicked, this, &MainWindow::numberClickedHandler);
    connect(ui->N7, &QPushButton::clicked, this, &MainWindow::numberClickedHandler);
    connect(ui->N8, &QPushButton::clicked, this, &MainWindow::numberClickedHandler);
    connect(ui->N9, &QPushButton::clicked, this, &MainWindow::numberClickedHandler);
    connect(ui->add, &QPushButton::clicked, this, &MainWindow::addSubMulDivClickHandler);
    connect(ui->sub, &QPushButton::clicked, this, &MainWindow::addSubMulDivClickHandler);
    connect(ui->mul, &QPushButton::clicked, this, &MainWindow::addSubMulDivClickHandler);
    connect(ui->div, &QPushButton::clicked, this, &MainWindow::addSubMulDivClickHandler);
    connect(ui->clr, &QPushButton::clicked, this, &MainWindow::clearAndEnterClicHandler);
    connect(ui->ent, &QPushButton::clicked, this, &MainWindow::clearAndEnterClicHandler);
}

MainWindow::~MainWindow()
{
    delete ui;
}

void MainWindow::numberClickedHandler()
{
    //Jos state on 1 niin muokataan num1 lineEditiä
    if (state==1){
    QPushButton *button = qobject_cast<QPushButton*>(sender());
    QString buttonText = button->text(); //Muutetaan napin numero muuttujaksi
    QString currentText = ui->num1->text(); //Muutetaan num1 lineEditin nykyinen teksti muuttujaksi

    currentText += buttonText; //Lisätään nykyisen tekstin -muuttujaan napin numero

    ui->num1->setText(currentText); //Päivitetään num1 lineEditin teksti uuteen

    QString name = button->objectName(); //luodaan QString name -muuttuja ja kerrotaan, että se ottaa sisältönsä napin nimestä
    qDebug() << "Button name: " << name; //Debug funktionaalisuus
    }
    else if (state == 2){ //Tässä sama kuin yllä, mutta state == 2, eli muokataan num2 lineEditiä
    QPushButton *button = qobject_cast<QPushButton*>(sender());
    QString buttonText = button->text();
    QString currentText = ui->num2->text();

    currentText += buttonText;

    ui->num2->setText(currentText);

    QString name = button->objectName();
    qDebug() << "Button name: " << name;
    }
}

void MainWindow::addSubMulDivClickHandler()
{
    QPushButton *button = qobject_cast<QPushButton*>(sender());
    QString name = button->objectName();
    qDebug() << "Button name: " << name;

    if (name == "add") { //Jos painetaan add-nappia
    operand = '+'; //niin muutetaan operand -muuttuja +:ksi
    state = 2; //Muutetaan state 2:een jotta päästään näpyttelemään num2 lineEditiin seuraava numero
    } else if (name == "sub") { //Jos painetaan sub-nappia
    operand = '-'; //niin muutetaan operand -muuttuja -:ksi
    state = 2;
    } else if (name == "mul") {//Jos painetaan mul-nappia
     operand = '*'; //niin muutetaan operand -muuttuja +:ksi
    state = 2;//Muutetaan state 2:een jotta päästään näpyttelemään num2 lineEditiin seuraava numero
    } else if (name == "div") {//Jos painetaan div-nappia
    operand = '/'; //niin muutetaan operand -muuttuja +:ksi
    state = 2;//Muutetaan state 2:een jotta päästään näpyttelemään num2 lineEditiin seuraava numero
    }
}

void MainWindow::clearAndEnterClicHandler()
{
    QPushButton *button = qobject_cast<QPushButton*>(sender());
    QString name = button->objectName();
    qDebug() << "Button name: " << name;

    if (name== "ent"){ //Jos painetaan enter-nappia
    float n1 = ui->num1->text().toFloat(); //luodaan muuttuja n1 jonka sisälle muunnetaan num1 line-edit floatiksi
    float n2 = ui->num2->text().toFloat(); //luodaan muuttuja n2 jonka sisälle muunnetaan num2 line-edit floatiksi
    qDebug() << "number 1 = " << n1 << "and number 2 = " << n2; //Debug funktionaalisuus

    switch(operand) { //Switchcase jonka sisällä liikutaan ja suoritetaan laskutoimenpide operand -muuttujan mukaan
    case '+':
        result = n1 + n2;
        break;
    case '-':
        result = n1 - n2;
        break;
    case '*':
        result = n1 * n2;
        break;
    case '/':
        if (n2 != 0.0) { //Jako tapahtuu vain jos ei jaeta nollalla
        result = n1 / n2;
        } else {
            qDebug() << "division by zero!"; //Jos jaetaan nollalla niin debug kertoo sen
            ui->result->setText("ERROR: DIV BY 0"); //ja result kentässä ilmoitetaan se
            return;
        }
        break;
    }
    ui->result->setText(QString::number(result)); //Asetetaan laskutoimituksen tulos result lineEdit -kenttään

    } else if (name == "clr") { //Jos painetaan clear -nappia niin tyhjennetään kaikki lineEditit ja asetetaan state 1
    ui->num1->clear();
    ui->num2->clear();
    ui->result->clear();
    state = 1;
    }
};

