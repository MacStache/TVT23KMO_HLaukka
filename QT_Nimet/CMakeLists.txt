cmake_minimum_required(VERSION 3.5)

project(QT_Nimet LANGUAGES C)

add_executable(QT_Nimet main.c)

install(TARGETS QT_Nimet
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
