package com.example.firebaseauthexample

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.Firebase
import com.google.firebase.auth.auth

class DisplayUserInfo : AppCompatActivity() {

    private val TAG = "userInfo"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.display_user_info)
        getUserProfile()

        val logOutButton = findViewById<Button>(R.id.logOutButton)

        logOutButton.setOnClickListener {
            //Sign out the user
            Firebase.auth .signOut()
            //Return to the MainActivity
            val intent = Intent(this, MainActivity::class.java)
            startActivity(intent)
            finish()
        }
    }



    // Get the currently signed-in user
    private fun getUserProfile() {
        val user = Firebase.auth.currentUser
        user?.let {
            //Name, email address, and profile photo Url
            //I have commented out the a lot of the displayable attributes
            //because they are not used in this example
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

            //Save User Email to TextView so it can be displayed in the UI
            val userInfoTextView = findViewById<TextView>(R.id.userInfo)
            userInfoTextView.text = email
        }
    }
}