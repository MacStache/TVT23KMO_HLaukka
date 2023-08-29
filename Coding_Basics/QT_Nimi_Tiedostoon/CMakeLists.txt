cmake_minimum_required(VERSION 3.5)

project(QT_Nimi_Tiedostoon LANGUAGES C)

add_executable(QT_Nimi_Tiedostoon main.c)

install(TARGETS QT_Nimi_Tiedostoon
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
