#include "devicetouchpad.h"

DeviceTouchPad::DeviceTouchPad()
{

}

void DeviceTouchPad::setTouchPadSensitivity()
{
    int valinta;
    bool validInput = false;

    while(!validInput) {
    cin >> valinta;

    if (valinta >= 1 && valinta <= 5){
        this->touchPadSensitivity = valinta;
        validInput = true;
    } else {
        cout << "The input is not valid. Input a value between 1-5. " <<endl;
    }
  }
}

short DeviceTouchPad::getTouchPadSensitivity()
{
    return touchPadSensitivity;
}
