cmake_minimum_required(VERSION 3.5)

project(QT_StructCars LANGUAGES C)

add_executable(QT_StructCars main.c)

install(TARGETS QT_StructCars
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
