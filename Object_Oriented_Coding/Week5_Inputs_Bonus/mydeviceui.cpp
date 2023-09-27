#include "mydeviceui.h"

MyDeviceUI::MyDeviceUI()
{
    pDeviceMouse = new DeviceMouse;
    pDeviceTouchPad = new DeviceTouchPad;
    pDeviceDisplay = new DeviceDisplay;
}

MyDeviceUI::~MyDeviceUI()
{
    delete pDeviceMouse;
    pDeviceMouse = nullptr;
    delete pDeviceTouchPad;
    pDeviceTouchPad = nullptr;
    delete pDeviceDisplay;
    pDeviceDisplay = nullptr;
}

void MyDeviceUI::uiShowMenu(){
    cout << "DEVICE MENU" << endl;
    cout << "===========" << endl;
    cout << "1 = Set Mouse Information" <<endl;
    cout << "2 = Set Touch Pad Information" <<endl;
    cout << "3 = Set Display Information" <<endl;
    cout << "4 = Show Device Information" <<endl;
    cout << "5 = Finish" <<endl;

    int valinta;
    cout << "choose: ";
    cin >> valinta;
    cout << endl;

    if (valinta == 1) {
        MyDeviceUI::uiSetMouseInformation();
        }
    else if (valinta == 2){
        MyDeviceUI::uiSetTouchPadInformation();
    }
    else if (valinta == 3){
        MyDeviceUI::uiSetDisplayInformation();
    }
    else if (valinta == 4){
        MyDeviceUI::uiShowDeviceInformation();
    }
    else if (valinta == 5){
        cout << "Thank you for using the application!" << endl;
        return;
    } else {
        cout << "The input is not valid. Choose a menu item between 1-5" <<endl;
        MyDeviceUI::uiShowMenu();
    }

}

void MyDeviceUI::uiSetMouseInformation()
{
    cout << "SET MOUSE INFORMATION" << endl;
    cout << "=====================" << endl;
    cout << "Set Mouse Device ID: ";
    pDeviceMouse->setDeviceID();
    cout << endl;
    cout << "Set Mouse Primary Button" << endl;
    cout << "1 is left button, 2 is right button " <<endl;
    pDeviceMouse->setPrimaryButton();
    cout << endl;
    MyDeviceUI::uiShowMenu();
}

void MyDeviceUI::uiSetTouchPadInformation()
{
    cout << "SET TOUCH PAD INFORMATION" << endl;
    cout << "=========================" << endl;
    cout << "Set Touch Pad Device ID: ";
    pDeviceTouchPad->setDeviceID();
    cout << endl;
    cout << "Set Touch Pad Sensitivity" << endl;
    cout << "more sensitive 1-2-3-4-5 less sensitive"<<endl;
    pDeviceTouchPad->setTouchPadSensitivity();
    cout << endl;
    MyDeviceUI::uiShowMenu();
}

void MyDeviceUI::uiSetDisplayInformation()
{
    cout << "SET DISPLAY INFORMATION" << endl;
    cout << "=======================" << endl;
    cout << "Set Display Device ID: ";
    pDeviceDisplay->setDeviceID();
    cout << endl;
    cout << "Set Display Resolution" <<endl;
    cout << "Input a resolution value between 1-10"<<endl;
    pDeviceDisplay->setDisplayResolution();
    cout << endl;
    MyDeviceUI::uiShowMenu();
}

void MyDeviceUI::uiShowDeviceInformation()
{
    cout << "Mouse DeviceID: " << pDeviceMouse->getDeviceID() <<endl;
    cout << "Mouse PrimaryButton: " << pDeviceMouse->getPrimaryButton()<<endl;
    cout << "Touch Pad DeviceID: " << pDeviceTouchPad->getDeviceID() <<endl;
    cout << "Touch Pad Sensitivity: " << pDeviceTouchPad->getTouchPadSensitivity()<<endl;
    cout << "Display DeviceID: " << pDeviceDisplay->getDeviceID() <<endl;
    cout << "Display Resolution: " << pDeviceDisplay->getDisplayResolution()<<endl;
    cout << endl;
    MyDeviceUI::uiShowMenu();
}

