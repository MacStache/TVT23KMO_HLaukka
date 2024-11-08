package com.example.firebaseauthexample

import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.auth.auth
import com.google.firebase.Firebase
import android.app.Application
import android.content.Intent
import com.google.firebase.FirebaseApp

class MainActivity : AppCompatActivity() {

    private val TAG = "MainActivity"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        // Initialize Firebase
        FirebaseApp.initializeApp(this)
        checkCurrentUser()
    }

    // Check if user is signed in (non-null) and update UI accordingly.
    private fun checkCurrentUser() {
        val user = Firebase.auth.currentUser
        if (user != null) {
            // User is signed in
            getUserProfile()
        } else {
            // No user is signed in
            Toast.makeText(this, "No user is signed in", Toast.LENGTH_SHORT).show()
            // No user is signed in, start EmailPasswordActivity
            val intent = Intent(this, EmailPasswordActivity::class.java)
            startActivity(intent)
            finish()
        }
    }

    // Get the currently signed-in user
    private fun getUserProfile() {
        val user = Firebase.auth.currentUser
        user?.let {
            //Name, email address, and profile photo Url
            //For now it's just the email
            //val name = it.displayName
            val email = it.email
            //val photoUrl = it.photoUrl

            //Possibility to check if user's email is verified
            //val emailVerified = it.isEmailVerified

            // The user's ID, unique to the Firebase project. Do NOT use this value to
            // authenticate with your backend server, if you have one. Use
            // FirebaseUser.getIdToken() instead.
            val uid = it.uid

            // Display user information
            //Log.d(TAG, "Name: $name")
            Log.d(TAG, "Email: $email")
            //Log.d(TAG, "Photo URL: $photoUrl")
            //Log.d(TAG, "Email Verified: $emailVerified")
            Log.d(TAG, "UID: $uid")
        }
    }
}