cmake_minimum_required(VERSION 3.5)

project(QT_nested LANGUAGES C)

add_executable(QT_nested main.c)

install(TARGETS QT_nested
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
