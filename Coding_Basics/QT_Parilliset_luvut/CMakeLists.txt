cmake_minimum_required(VERSION 3.5)

project(QT_Parilliset_luvut LANGUAGES C)

add_executable(QT_Parilliset_luvut main.c)

install(TARGETS QT_Parilliset_luvut
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
