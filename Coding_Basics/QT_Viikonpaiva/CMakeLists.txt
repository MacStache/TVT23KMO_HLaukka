cmake_minimum_required(VERSION 3.5)

project(QT_Viikonpaiva LANGUAGES C)

add_executable(QT_Viikonpaiva main.c)

install(TARGETS QT_Viikonpaiva
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
