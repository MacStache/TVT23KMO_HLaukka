cmake_minimum_required(VERSION 3.5)

project(QT_KumpiIsompi LANGUAGES C)

add_executable(QT_KumpiIsompi main.c)

install(TARGETS QT_KumpiIsompi
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
