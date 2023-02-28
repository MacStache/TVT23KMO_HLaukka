cmake_minimum_required(VERSION 3.5)

project(QT_Structs LANGUAGES C)

add_executable(QT_Structs main.c)

install(TARGETS QT_Structs
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
