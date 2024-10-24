package com.example.finalwork.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.livedata.observeAsState
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.example.finalwork.viewmodel.MainViewModel
import androidx.compose.ui.Alignment
import androidx.compose.ui.res.stringResource
import coil.compose.rememberAsyncImagePainter
import com.example.finalwork.R
import java.text.SimpleDateFormat
import java.util.*

@Composable
fun MainScreen(viewModel: MainViewModel, navController: NavController) {
    val publicHolidays by viewModel.publicHolidays.observeAsState(emptyList())
    val errorMessage by viewModel.errorMessage.observeAsState()
    val isLoading by viewModel.isLoading.observeAsState(false)

    LaunchedEffect(Unit) {
        viewModel.fetchNextPublicHolidayForFinland()
    }

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
                text = stringResource(id = R.string.main_screen_title),
                style = MaterialTheme.typography.headlineLarge,
                modifier = Modifier
                    .align(Alignment.CenterHorizontally)
                    .padding(16.dp)
            )
        }

        if (isLoading) {
            CircularProgressIndicator(modifier = Modifier.align(Alignment.Center))
        } else {
            errorMessage?.let { error ->
                Text(text = error, color = MaterialTheme.colorScheme.error, modifier = Modifier.align(Alignment.Center))
            }

            Spacer(modifier = Modifier.height(16.dp))

            if (publicHolidays.isNotEmpty()) {
                val sortedHolidays = publicHolidays.sortedBy { it.date }
                Column(
                    modifier = Modifier.align(Alignment.Center)
                ) {
                    sortedHolidays.forEach { holiday ->
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Text(text = formatDate(holiday.date))
                            Text(text = holiday.localName)
                        }
                    }
                }
            } else if (!isLoading && errorMessage == null) {
                Text(text = stringResource(id = R.string.no_data), modifier = Modifier.align(Alignment.Center))
            }
        }

        Button(
            onClick = { navController.navigate("info") },
            modifier = Modifier.align(Alignment.BottomCenter)
        ) {
            Text(text = stringResource(id = R.string.go_to_info))
        }
    }
}

fun formatDate(dateString: String): String {
    val inputFormat = SimpleDateFormat("yyyy-MM-dd", Locale.getDefault())
    val outputFormat = SimpleDateFormat("dd.MM.yyyy", Locale.getDefault())
    val date = inputFormat.parse(dateString)
    return outputFormat.format(date)
}