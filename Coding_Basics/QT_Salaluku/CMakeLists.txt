cmake_minimum_required(VERSION 3.5)

project(QT_Salaluku LANGUAGES C)

add_executable(QT_Salaluku main.c)

install(TARGETS QT_Salaluku
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
