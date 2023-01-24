cmake_minimum_required(VERSION 3.5)

project(QT_taulukko LANGUAGES C)

add_executable(QT_taulukko main.c)

install(TARGETS QT_taulukko
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
