cmake_minimum_required(VERSION 3.5)

project(QT_aliohjelma LANGUAGES C)

add_executable(QT_aliohjelma main.c)

install(TARGETS QT_aliohjelma
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
