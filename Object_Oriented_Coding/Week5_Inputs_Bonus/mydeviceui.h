#ifndef MYDEVICEUI_H
#define MYDEVICEUI_H
#include "devicemouse.h"
#include "devicedisplay.h"
#include "devicetouchpad.h"

class MyDeviceUI : DeviceBaseClass
{
public:
    MyDeviceUI();
    ~MyDeviceUI();
    void uiShowMenu();
    void uiSetMouseInformation();
    void uiSetTouchPadInformation();
    void uiSetDisplayInformation();
    void uiShowDeviceInformation();

private:
    DeviceMouse *pDeviceMouse;
    DeviceDisplay *pDeviceDisplay;
    DeviceTouchPad *pDeviceTouchPad;
};

#endif // MYDEVICEUI_H
