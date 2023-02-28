cmake_minimum_required(VERSION 3.5)

project(QT_Valikko2 LANGUAGES C)

add_executable(QT_Valikko2 main.c)

install(TARGETS QT_Valikko2
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
