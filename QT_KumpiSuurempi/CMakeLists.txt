cmake_minimum_required(VERSION 3.5)

project(QT_KumpiSuurempi LANGUAGES C)

add_executable(QT_KumpiSuurempi main.c)

install(TARGETS QT_KumpiSuurempi
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
