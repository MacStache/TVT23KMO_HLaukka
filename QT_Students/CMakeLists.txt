cmake_minimum_required(VERSION 3.5)

project(QT_Students LANGUAGES C)

add_executable(QT_Students main.c)

install(TARGETS QT_Students
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
