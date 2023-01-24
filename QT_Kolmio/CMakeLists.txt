cmake_minimum_required(VERSION 3.5)

project(QT_Kolmio LANGUAGES C)

add_executable(QT_Kolmio main.c)

install(TARGETS QT_Kolmio
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
