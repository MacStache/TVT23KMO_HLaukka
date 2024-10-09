package com.example.bodymassindexviewmodel

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel

class BMIViewModel: ViewModel() {
    private var _heightInput by mutableStateOf("")
    private var _weightInput by mutableStateOf("")

    val heightInput: String
        get() = _heightInput
    val weightInput: String
        get() = _weightInput

    fun updateHeightInput(newHeight: String) {
        _heightInput = newHeight
    }
    fun updateWeightInput(newWeight: String) {
        _weightInput = newWeight
    }

    private val height: Float
        get() = _heightInput.toFloatOrNull()?.let { it / 100 } ?: 0.0f  // Convert cm to meters
    private val weight: Int
        get() = _weightInput.toIntOrNull() ?: 0
    val bmi: Float
        get() = calculateBMI()

    //Private method to calculate BMI
    private fun calculateBMI(): Float {
        return if (weight > 0 && height > 0) {
            weight / (height * height) //Calculate BMI
        } else {
            0.0f  //Return 0 if weight or height is not valid
        }
    }
}