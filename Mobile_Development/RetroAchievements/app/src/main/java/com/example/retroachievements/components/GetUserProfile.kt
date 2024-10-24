package com.example.retroachievements.components

data class GetUserProfile(
    val user: String,
    val userPic: String,
    val memberSince: String,
    val richPresenceMsg: String?,
    val lastGameID: Int,
    val contribCount: Int,
    val contribYield: Int,
    val totalPoints: Int,
    val totalSoftcorePoints: Int,
    val totalTruePoints: Int,
    val permissions: Int,
    val untracked: Int,
    val id: Int,
    val userWallActive: Boolean,
    val motto: String?
)
