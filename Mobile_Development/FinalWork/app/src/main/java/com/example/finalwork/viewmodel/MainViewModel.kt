package com.example.finalwork.viewmodel

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.launch
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.GET
import retrofit2.http.Path
import kotlinx.coroutines.delay

data class PublicHoliday(
    val date: String,
    val localName: String,
    val name: String,
    val countryCode: String,
    val fixed: Boolean,
    val global: Boolean,
    val counties: List<String>?,
    val launchYear: Int?,
    val type: String
)

interface ApiService {
    @GET("PublicHolidays/{year}/{countryCode}")
    suspend fun getPublicHolidays(
        @Path("year") year: Int,
        @Path("countryCode") countryCode: String
    ): List<PublicHoliday>
}

class MainViewModel : ViewModel() {
    private val retrofit = Retrofit.Builder()
        .baseUrl("https://date.nager.at/Api/v3/")
        .addConverterFactory(GsonConverterFactory.create())
        .build()

    private val apiService = retrofit.create(ApiService::class.java)

    private val _publicHolidays = MutableLiveData<List<PublicHoliday>>()
    val publicHolidays: LiveData<List<PublicHoliday>> = _publicHolidays

    private val _errorMessage = MutableLiveData<String?>()
    val errorMessage: LiveData<String?> = _errorMessage

    private val _isLoading = MutableLiveData<Boolean>()
    val isLoading: LiveData<Boolean> = _isLoading

    fun fetchNextPublicHolidayForFinland() {
        viewModelScope.launch {
            _isLoading.value = true
            try {
                delay(1000)
                val currentYear = java.util.Calendar.getInstance().get(java.util.Calendar.YEAR)
                val holidays = apiService.getPublicHolidays(currentYear, "FI")
                _publicHolidays.value = holidays
                _errorMessage.value = null
            } catch (e: Exception) {
                _errorMessage.value = "Datan lataaminen epäonnistui"
            } finally {
                _isLoading.value = false
            }
        }
    }
}
