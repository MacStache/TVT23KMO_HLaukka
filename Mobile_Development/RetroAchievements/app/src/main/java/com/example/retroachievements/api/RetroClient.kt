package com.example.retroachievements.api

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class RetroClient(credentials: RetroCredentials) {
    private val baseUrl = "https://retroachievements.org/API/"

    val api: RetroInterface by lazy {
        Retrofit.Builder()
            .baseUrl(baseUrl)
            .addConverterFactory(GsonConverterFactory.create(GsonProvider.gson))
            .build()
            .create(RetroInterface::class.java)
    }
}
