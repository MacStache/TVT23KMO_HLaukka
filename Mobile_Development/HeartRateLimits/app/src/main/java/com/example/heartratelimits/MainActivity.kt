package com.example.heartratelimits

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.heartratelimits.ui.theme.HeartRateLimitsTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            HeartRateLimitsTheme {
                HeartRateLimits()
                }
            }
        }
    }

@Composable
fun HeartRateLimits() {
    var ageInput by remember { mutableStateOf("") }
    val age = ageInput.toIntOrNull() ?: 0
    val upper = if (age > 0 ) (220 - age) * 0.85 else 0
    val lower = if (age > 0 ) (220 - age) * 0.65 else 0

    Column(
        modifier = Modifier.padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        TextField(
            value = ageInput,
            onValueChange = {ageInput = it},
            label = {Text(text = stringResource(R.string.age))},
            singleLine = true,
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number)
            )
        Text(
            text = stringResource(R.string.heart_rate_limits,lower,upper)
        )
    }
}

@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    HeartRateLimitsTheme {
        HeartRateLimits()
    }
}