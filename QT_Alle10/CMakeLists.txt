cmake_minimum_required(VERSION 3.5)

project(QT_Alle10 LANGUAGES C)

add_executable(QT_Alle10 main.c)

install(TARGETS QT_Alle10
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
