cmake_minimum_required(VERSION 3.5)

project(QT_aliohjelmafloat LANGUAGES C)

add_executable(QT_aliohjelmafloat main.c)

install(TARGETS QT_aliohjelmafloat
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
