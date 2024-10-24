package com.example.retroachievements

import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.viewModels
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.retroachievements.components.UserProfileDisplay
import com.example.retroachievements.viewmodel.UserViewModel
import com.example.retroachievements.ui.theme.RetroAchievementsTheme
import androidx.compose.runtime.livedata.observeAsState

class MainActivity : ComponentActivity() {
    private val userViewModel: UserViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            RetroAchievementsTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    UserSearchScreen(
                        modifier = Modifier.padding(innerPadding),
                        userViewModel = userViewModel
                    )
                }
            }
        }
    }
}

@Composable
fun UserSearchScreen(modifier: Modifier = Modifier, userViewModel: UserViewModel) {
    var username by remember { mutableStateOf("") }
    val apiKey = "mTaOkSbpF45i9ImFzyAU7MxeW04xH0aA"
    val userProfile by userViewModel.userProfile.observeAsState()
    val profileNotFound by userViewModel.profileNotFound.observeAsState(false)

    Column(
        modifier = modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.Top
    ) {
        TextField(
            value = username,
            onValueChange = { username = it },
            label = { Text("Enter Username") },
            modifier = Modifier.fillMaxWidth()
        )
        Spacer(modifier = Modifier.height(8.dp))
        Button(
            onClick = {
                if (username.isNotEmpty()) {
                    Log.d("MainActivity", "API Key: $apiKey")
                    userViewModel.fetchUserProfile(username, apiKey)
                } else {
                    // Handle empty username case
                }
            },
            modifier = Modifier.fillMaxWidth()
        ) {
            Text("Search")
        }
        Spacer(modifier = Modifier.height(16.dp))
        UserProfileDisplay(profile = userProfile, profileNotFound = profileNotFound)
    }
}

@Preview(showBackground = true)
@Composable
fun UserSearchScreenPreview() {
    RetroAchievementsTheme {
        UserSearchScreen(userViewModel = UserViewModel())
    }
}