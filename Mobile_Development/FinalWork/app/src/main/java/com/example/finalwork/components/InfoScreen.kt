package com.example.finalwork.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import coil.compose.rememberAsyncImagePainter
import com.example.finalwork.R

@Composable
fun InfoScreen(navController: NavController) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        Column(
            modifier = Modifier.align(Alignment.TopCenter),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Image(
                painter = rememberAsyncImagePainter(model = R.drawable.calendar),
                contentDescription = null,
                modifier = Modifier
                    .size(128.dp)
                    .padding(20.dp)
            )
            Text(
                text = stringResource(id = R.string.info_screen_title),
                style = MaterialTheme.typography.headlineLarge,
                modifier = Modifier
                    .align(Alignment.CenterHorizontally)
                    .padding(16.dp)
            )
            Row {
            Text(
                text = stringResource(id = R.string.info_text),
            )
            }
        }
        Button(
            onClick = { navController.navigate("main") },
            modifier = Modifier.align(Alignment.BottomCenter)
        ) {
            Text(text = stringResource(id = R.string.go_to_main))
        }
    }
}