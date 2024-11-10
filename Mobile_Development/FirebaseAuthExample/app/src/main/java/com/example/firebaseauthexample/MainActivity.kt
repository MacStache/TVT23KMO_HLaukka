package com.example.firebaseauthexample

import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.auth.auth
import com.google.firebase.Firebase
import android.content.Intent
import com.google.firebase.FirebaseApp

class MainActivity : AppCompatActivity() {

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
            Toast.makeText(this, "User is signed in", Toast.LENGTH_SHORT).show()
            // User is signed in, start DisplayUserInfo activity
            val intent = Intent(this, DisplayUserInfo::class.java)
            startActivity(intent)
            finish()
        } else {
            // No user is signed in
            Toast.makeText(this, "No user is signed in", Toast.LENGTH_SHORT).show()
            // No user is signed in, start EmailPasswordActivity
            val intent = Intent(this, EmailPasswordActivity::class.java)
            startActivity(intent)
            finish()
        }
    }
}