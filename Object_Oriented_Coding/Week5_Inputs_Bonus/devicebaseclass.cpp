#include "devicebaseclass.h"

DeviceBaseClass::DeviceBaseClass()
{

};

void DeviceBaseClass::setDeviceID()
{
    cin >> this->deviceID;
};

short DeviceBaseClass::getDeviceID()
{
    return deviceID;
};
