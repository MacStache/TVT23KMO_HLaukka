cmake_minimum_required(VERSION 3.5)

project(QT_Keskiarvo LANGUAGES C)

add_executable(QT_Keskiarvo main.c)

install(TARGETS QT_Keskiarvo
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
