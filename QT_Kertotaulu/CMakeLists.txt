cmake_minimum_required(VERSION 3.5)

project(QT_Kertotaulu LANGUAGES C)

add_executable(QT_Kertotaulu main.c)

install(TARGETS QT_Kertotaulu
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR})
