cmake_minimum_required(VERSION 3.5)

project(QT_lampotila LANGUAGES C)

add_executable(QT_lampotila main.c)

install(TARGETS QT_lampotila
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
