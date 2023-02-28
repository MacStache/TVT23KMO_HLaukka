cmake_minimum_required(VERSION 3.5)

project(QT_Source LANGUAGES C)

add_executable(QT_Source main.c)

install(TARGETS QT_Source
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
