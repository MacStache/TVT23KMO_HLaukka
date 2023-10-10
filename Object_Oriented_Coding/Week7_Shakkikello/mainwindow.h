#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>

QT_BEGIN_NAMESPACE
namespace Ui { class MainWindow; }
QT_END_NAMESPACE

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

public slots:
    void timeout();
    void startGame();
    void stopGame();
    void switchPlayer1();
    void switchPlayer2();
    void setGameTime120();
    void setGameTime300();


private:
    Ui::MainWindow *ui;
    short gameTime;
    short player1Time;
    short player2Time;
    short currentPlayer;
    QTimer *gameTimer;

    void updateProgressBar();
    void setGameInfoText(QString text, short timeout);
};
#endif // MAINWINDOW_H
