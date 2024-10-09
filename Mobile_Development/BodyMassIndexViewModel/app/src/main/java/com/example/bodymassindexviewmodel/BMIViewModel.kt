package com.example.bodymassindexviewmodel

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel

class BMIViewModel: ViewModel() {
    var heightInput by mutableStateOf("")
    var weightInput by mutableStateOf("")

    val height: Float
        get() = heightInput.toFloatOrNull()?.let { it / 100 } ?: 0.0f  // Convert cm to meters
    val weight: Int
        get() = weightInput.toIntOrNull() ?: 0
    val bmi: Float
        get() = if (weight > 0 && height > 0) weight / (height * height) else 0.0f  // Calculate BMI
}