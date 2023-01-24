cmake_minimum_required(VERSION 3.5)

project(QT_H1_HelloWorld LANGUAGES C)

add_executable(QT_H1_HelloWorld main.c)

install(TARGETS QT_H1_HelloWorld
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
