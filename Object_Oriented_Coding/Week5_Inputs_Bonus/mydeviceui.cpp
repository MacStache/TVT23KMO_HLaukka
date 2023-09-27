#include "mydeviceui.h"

MyDeviceUI::MyDeviceUI()
{
    pDeviceMouse = new DeviceMouse;
}

MyDeviceUI::~MyDeviceUI()
{
    delete pDeviceMouse;
    pDeviceMouse = nullptr;
}

void MyDeviceUI::uiShowMenu(){
    cout << "DEVICE MENU" << endl;
    cout << "===========" << endl;
    cout << "1 = Set Mouse Information" <<endl;
    cout << "2 = Set Touch Pad Information" <<endl;
    cout << "3 = Set Display Information" <<endl;
    cout << "4 = Show Devices Information" <<endl;
    cout << "5 = Finish" <<endl;

    int valinta;
    cout << "choose:"<< endl;
    cin >> valinta;

    cout << "valitsit " << valinta << endl;
}

