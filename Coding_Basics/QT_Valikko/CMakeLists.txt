cmake_minimum_required(VERSION 3.5)

project(QT_Valikko LANGUAGES C)

add_executable(QT_Valikko main.c)

install(TARGETS QT_Valikko
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
