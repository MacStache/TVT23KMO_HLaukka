cmake_minimum_required(VERSION 3.5)

project(QT_StructCars2 LANGUAGES C)

add_executable(QT_StructCars2 main.c)

install(TARGETS QT_StructCars2
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
