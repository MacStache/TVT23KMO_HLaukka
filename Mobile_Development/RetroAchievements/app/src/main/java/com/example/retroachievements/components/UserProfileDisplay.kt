package com.example.retroachievements.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.rememberAsyncImagePainter

@Composable
fun UserProfileDisplay(profile: UserProfile?, profileNotFound: Boolean) {
    Column(modifier = Modifier.padding(16.dp)) {
        when {
            profile == null && !profileNotFound -> {
                // Do nothing
            }
            profileNotFound -> {
                Text(text = "Profile not found", fontSize = 20.sp, fontWeight = FontWeight.Bold)
            }
            else -> {
                profile?.let {
                    Column {
                        Row(modifier = Modifier.padding(bottom = 16.dp)) {
                            Image(
                                painter = rememberAsyncImagePainter(model = "https://retroachievements.org${it.userPic}"),
                                contentDescription = null,
                                modifier = Modifier.size(64.dp),
                                contentScale = ContentScale.Crop
                            )
                            Spacer(modifier = Modifier.width(16.dp))
                            Column {
                                Text(text = it.user, fontSize = 20.sp, fontWeight = FontWeight.Bold)
                                Text(text = "Member Since: ${it.memberSince}")
                                Text(text = "Motto: ${it.motto}")
                            }
                        }
                        Text(text = "Rich Presence: ${it.richPresenceMsg}")
                        Text(text = "Total Points: ${it.totalPoints}")
                        Text(text = "Total True Points: ${it.totalTruePoints}")
                    }
                }
            }
        }
    }
}