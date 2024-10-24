package com.example.retroachievements.components

data class UserProfile(
    val user: String,
    val userPic: String,
    val memberSince: String,
    val motto: String,
    val richPresenceMsg: String,
    val totalPoints: Int,
    val totalTruePoints: Int
)