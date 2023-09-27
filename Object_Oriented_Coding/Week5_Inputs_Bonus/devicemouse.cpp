#include "devicemouse.h"

DeviceMouse::DeviceMouse()
{

}

void DeviceMouse::setPrimaryButton()
{
    int valinta;
    bool validInput = false;

    while(!validInput) {
    cin >> valinta;

    if (valinta == 1 || valinta == 2){
        this->primaryButton = valinta;
        validInput = true;
    } else {
        cout << "The input is not valid. Input a value of 1 or 2. " <<endl;
    }
  }
}

short DeviceMouse::getPrimaryButton()
{
    return primaryButton;
}
