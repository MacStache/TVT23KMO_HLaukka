cmake_minimum_required(VERSION 3.5)

project(QT_Taulukko2 LANGUAGES C)

add_executable(QT_Taulukko2 main.c)

install(TARGETS QT_Taulukko2
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
