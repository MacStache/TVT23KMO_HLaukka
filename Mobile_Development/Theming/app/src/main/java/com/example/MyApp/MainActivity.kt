package com.example.MyApp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.MyApp.ui.theme.OuasOrange
import com.example.MyApp.ui.theme.ThemingTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            ThemingTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    MyApp()
                }
            }
        }
    }
}

@Composable
fun MyApp() {
    val appModifier = Modifier
        .fillMaxWidth()
        .padding(8.dp)
    Column() {
        Text(
            text = "My title",
            style = MaterialTheme.typography.headlineLarge,
            modifier = appModifier
        )
        OutlinedTextField(
            value = "",
            onValueChange = { /*TODO*/},
            modifier = appModifier
        )
        Button(
            onClick = { /*TODO*/ },
            modifier = appModifier,
            colors = ButtonDefaults.buttonColors(
                //Tämä piti tehdä tätä kautta, että toimii. Ohjeistus oli virheellinen/vanhentunut
                containerColor = OuasOrange
            )
            ) {
            Text(text="Submit")
        }
    }
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    ThemingTheme {
        MyApp()
    }
}