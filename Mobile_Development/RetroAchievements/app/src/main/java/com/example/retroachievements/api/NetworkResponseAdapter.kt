package com.example.retroachievements.api

import com.google.gson.TypeAdapter
import com.google.gson.stream.JsonReader
import com.google.gson.stream.JsonToken
import com.google.gson.stream.JsonWriter
import com.haroldadmin.cnradapter.NetworkResponse
import com.example.retroachievements.components.GetUserProfile
import org.retroachivements.api.data.pojo.ErrorResponse

class NetworkResponseAdapter : TypeAdapter<NetworkResponse<GetUserProfile, ErrorResponse>>() {

    override fun write(out: JsonWriter?, value: NetworkResponse<GetUserProfile, ErrorResponse>?) {
        // Implement write logic if you need to serialize the NetworkResponse.
    }

    override fun read(reader: JsonReader): NetworkResponse<GetUserProfile, ErrorResponse> {
        reader.beginObject()

        var userProfile: GetUserProfile? = null
        var errorResponse: ErrorResponse? = null

        while (reader.hasNext()) {
            when (val name = reader.nextName()) {
                "User" -> {
                    // Parse the user profile fields
                    userProfile = parseUserProfile(reader)
                }
                "Error" -> {
                    // Parse the error response
                    errorResponse = ErrorResponse(message = reader.nextString())
                }
                else -> reader.skipValue() // Ignore any unexpected fields
            }
        }

        reader.endObject()

        return if (userProfile != null) {
            NetworkResponse.Success(response = userProfile)
        } else {
            NetworkResponse.Error(errors = errorResponse ?: ErrorResponse(message = "Unknown error"))
        }
    }

    private fun parseUserProfile(reader: JsonReader): GetUserProfile {
        var user = ""
        var userPic = ""
        var memberSince = ""
        var richPresenceMsg: String? = null
        var lastGameID = 0
        var contribCount = 0
        var contribYield = 0
        var totalPoints = 0
        var totalSoftcorePoints = 0
        var totalTruePoints = 0
        var permissions = 0
        var untracked = 0
        var id = 0
        var userWallActive = false
        var motto: String? = null

        reader.beginObject()
        while (reader.hasNext()) {
            when (reader.nextName()) {
                "User" -> user = reader.nextString()
                "UserPic" -> userPic = reader.nextString()
                "MemberSince" -> memberSince = reader.nextString()
                "RichPresenceMsg" -> richPresenceMsg = reader.nextString()
                "LastGameID" -> lastGameID = reader.nextInt()
                "ContribCount" -> contribCount = reader.nextInt()
                "ContribYield" -> contribYield = reader.nextInt()
                "TotalPoints" -> totalPoints = reader.nextInt()
                "TotalSoftcorePoints" -> totalSoftcorePoints = reader.nextInt()
                "TotalTruePoints" -> totalTruePoints = reader.nextInt()
                "Permissions" -> permissions = reader.nextInt()
                "Untracked" -> untracked = reader.nextInt()
                "ID" -> id = reader.nextInt()
                "UserWallActive" -> userWallActive = reader.nextBoolean()
                "Motto" -> motto = reader.nextString()
                else -> reader.skipValue() // Ignore unknown fields
            }
        }
        reader.endObject()

        return GetUserProfile(
            user, userPic, memberSince, richPresenceMsg, lastGameID, contribCount, contribYield,
            totalPoints, totalSoftcorePoints, totalTruePoints, permissions, untracked, id, userWallActive, motto
        )
    }
}
