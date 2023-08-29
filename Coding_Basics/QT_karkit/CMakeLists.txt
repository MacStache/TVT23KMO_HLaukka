cmake_minimum_required(VERSION 3.5)

project(QT_karkit LANGUAGES C)

add_executable(QT_karkit main.c)

install(TARGETS QT_karkit
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
