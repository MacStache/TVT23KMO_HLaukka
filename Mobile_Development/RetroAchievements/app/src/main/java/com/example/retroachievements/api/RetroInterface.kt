package com.example.retroachievements.api

import com.example.retroachievements.components.GetUserProfile
import org.retroachivements.api.data.pojo.ErrorResponse
import com.haroldadmin.cnradapter.NetworkResponse
import retrofit2.http.GET
import retrofit2.http.Query

interface RetroInterface {
    @GET("API_GetUserProfile.php")
    suspend fun getUserProfile(
        @Query("u") username: String,
        @Query("y") apiKey: String
    ): NetworkResponse<GetUserProfile.Response, ErrorResponse>
}