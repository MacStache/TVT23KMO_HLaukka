package com.example.retroachievements.api

import com.google.gson.Gson
import com.google.gson.GsonBuilder
import com.haroldadmin.cnradapter.NetworkResponse
import com.example.retroachievements.components.GetUserProfile
import org.retroachivements.api.data.pojo.ErrorResponse

object GsonProvider {
    val gson: Gson = GsonBuilder()
        .registerTypeAdapter(NetworkResponse::class.java, NetworkResponseAdapter())
        .setLenient()
        .create()
}
