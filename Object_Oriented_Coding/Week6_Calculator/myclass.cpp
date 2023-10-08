#include "myclass.h"

myClass::myClass(QObject *parent)
    : QObject{parent}
{
    pQTimer = new QTimer;
    connect(pQTimer,SIGNAL(timeout()),this,SLOT(handleTimeOut()));
    pQTimer->start(1000);
}

myClass::~myClass()
{
    delete pQTimer;
    pQTimer = nullptr;
}

void myClass::handleTimeOut()
{
    emit sendTimerUpdate();
}
