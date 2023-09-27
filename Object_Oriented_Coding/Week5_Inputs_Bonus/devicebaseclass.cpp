#include "devicebaseclass.h"

DeviceBaseClass::DeviceBaseClass()
{

};

void DeviceBaseClass::setDeviceID()
{
    cout << "Anna deviceID" << endl;
    cin >> deviceID;
};

short DeviceBaseClass::getDeviceID()
{
    return deviceID;
};
