cmake_minimum_required(VERSION 3.5)

project(QT_Alennus LANGUAGES C)

add_executable(QT_Alennus main.c)

install(TARGETS QT_Alennus
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
