package com.example.retroachievements.viewmodel

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.retroachievements.api.RetroClient
import com.example.retroachievements.api.RetroCredentials
import com.example.retroachievements.api.RetroInterface
import com.example.retroachievements.components.UserProfile
import com.haroldadmin.cnradapter.NetworkResponse
import kotlinx.coroutines.launch
import org.retroachivements.api.data.pojo.ErrorResponse
import com.example.retroachievements.components.GetUserProfile

class UserViewModel : ViewModel() {
    private val _userProfile = MutableLiveData<UserProfile?>()
    val userProfile: LiveData<UserProfile?> = _userProfile

    private val _profileNotFound = MutableLiveData<Boolean>()
    val profileNotFound: LiveData<Boolean> = _profileNotFound

    fun fetchUserProfile(username: String, apiKey: String) {
        viewModelScope.launch {
            try {
                val credentials = RetroCredentials(username, apiKey)
                val api: RetroInterface = RetroClient(credentials).api

                val response: NetworkResponse<GetUserProfile.Response, ErrorResponse> = api.getUserProfile(username, apiKey)

                when (response) {
                    is NetworkResponse.Success -> {
                        val userProfile = response.body.let {
                            UserProfile(
                                user = it.user,
                                userPic = it.userPic,
                                memberSince = it.memberSince,
                                motto = it.motto ?: "",
                                richPresenceMsg = it.richPresenceMsg ?: "",
                                totalPoints = it.totalPoints,
                                totalTruePoints = it.totalTruePoints.toInt()
                            )
                        }
                        _userProfile.value = userProfile
                        _profileNotFound.value = false
                    }
                    is NetworkResponse.Error -> {
                        _userProfile.value = null
                        _profileNotFound.value = true
                        Log.e("UserViewModel", "Error fetching user profile: ${response.error}")
                    }
                }
            } catch (e: Exception) {
                _userProfile.value = null
                _profileNotFound.value = true
                Log.e("UserViewModel", "Exception fetching user profile", e)
            }
        }
    }
}