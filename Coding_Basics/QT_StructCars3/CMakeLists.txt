cmake_minimum_required(VERSION 3.5)

project(QT_StructCars3 LANGUAGES C)

add_executable(QT_StructCars3 main.c)

install(TARGETS QT_StructCars3
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
