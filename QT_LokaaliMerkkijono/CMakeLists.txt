cmake_minimum_required(VERSION 3.5)

project(QT_LokaaliMerkkijono LANGUAGES C)

add_executable(QT_LokaaliMerkkijono main.c)

install(TARGETS QT_LokaaliMerkkijono
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
