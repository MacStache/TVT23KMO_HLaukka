#include "devicedisplay.h"

DeviceDisplay::DeviceDisplay()
{

}

void DeviceDisplay::setDisplayResolution()
{
    int valinta;
    bool validInput = false;

    while(!validInput) {
    cin >> valinta;

    if (valinta >= 1 && valinta <= 10){
        this->displayResolution = valinta;
        validInput = true;
    } else {
        cout << "The input is not valid. Input a value between 1-10. " <<endl;
    }
  }
}

short DeviceDisplay::getDisplayResolution()
{
    return displayResolution;
}
