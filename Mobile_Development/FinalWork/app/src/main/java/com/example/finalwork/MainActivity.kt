package com.example.finalwork

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.viewModels
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.compose.NavHost
import androidx.navigation.NavHostController
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController

import com.example.finalwork.ui.theme.FinalWorkTheme
import com.example.finalwork.viewmodel.MainViewModel
import com.example.finalwork.components.InfoScreen
import com.example.finalwork.components.MainScreen

class MainActivity : ComponentActivity() {
    private val viewModel: MainViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            FinalWorkTheme {
                Surface(color = MaterialTheme.colorScheme.background) {
                    MainApp(viewModel)
                }
            }
        }
        viewModel.fetchNextPublicHolidayForFinland()
    }
}

@Composable
fun MainApp(viewModel: MainViewModel) {
    val navController = rememberNavController()
    Navigation(navController = navController, viewModel = viewModel)
}

@Composable
fun Navigation(navController: NavHostController, viewModel: MainViewModel) {
    val viewModel: MainViewModel = viewModel()
    NavHost(navController = navController, startDestination = "main") {
        composable("main") {
            MainScreen(viewModel = viewModel, navController = navController)
        }
        composable("info") {
            InfoScreen(navController = navController)
        }
    }
}