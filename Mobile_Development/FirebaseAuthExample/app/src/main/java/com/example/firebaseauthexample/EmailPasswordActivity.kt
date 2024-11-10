package com.example.firebaseauthexample

import android.content.ContentValues.TAG
import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.credentials.GetCredentialRequest
import androidx.credentials.GetPasswordOption
import androidx.credentials.GetPublicKeyCredentialOption
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseUser
import com.google.firebase.ktx.Firebase
import com.google.firebase.auth.ktx.auth

class EmailPasswordActivity() : AppCompatActivity() {

    //Declare an instance of FirebaseAuth
    private lateinit var auth: FirebaseAuth

    //In the onCreate() method, initialize the FirebaseAuth instance.
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_email_password)
        // Initialize Firebase Auth
        auth = Firebase.auth

        //Get references to the email and password fields and the register and sign in buttons.
        val emailField = findViewById<EditText>(R.id.emailField)
        val passwordField = findViewById<EditText>(R.id.passwordField)
        val registerButton = findViewById<Button>(R.id.registerButton)
        val signInButton = findViewById<Button>(R.id.signInButton)

        //Set an OnClickListener on the register button that calls the createAccount method.
        registerButton.setOnClickListener {
            val email = emailField.text.toString()
            val password = passwordField.text.toString()
            createAccount(email, password)
        }

        //Set an OnClickListener on the sign in button that calls the signIn method.
        signInButton.setOnClickListener {
            val email = emailField.text.toString()
            val password = passwordField.text.toString()
            signIn(email, password)
        }

    }

    //When initializing your Activity, check to see if the user is currently signed in.
    public override fun onStart() {
        super.onStart()
        // Check if user is signed in (non-null) and update UI accordingly.
        val currentUser = auth.currentUser
        if (currentUser != null) {
            reload()
        }
    }

    private fun reload() {
        // Implement your reload logic here
    }

    //Create a new createAccount method that takes in an email address and password, validates them,
    //and then creates a new user with the createUserWithEmailAndPassword method.
    private fun createAccount(email: String, password: String) {
        auth.createUserWithEmailAndPassword(email, password)
            .addOnCompleteListener(this) { task ->
                if (task.isSuccessful) {
                    // Sign in success, update UI with the signed-in user's information
                    Log.d(TAG, "createUserWithEmail:success")
                    val user = auth.currentUser
                    val loginInfoTextView = findViewById<TextView>(R.id.LoginInfo)
                    loginInfoTextView.text = "User created! You can now login!"
                } else {
                    // If sign in fails, display a message to the user.
                    Log.w(TAG, "createUserWithEmail:failure", task.exception)
                    val errorMessage = task.exception?.message?.substringAfter("] ")?.replace("[", "")?.replace("]", "") ?: "Authentication failed."
                    Toast.makeText(baseContext, errorMessage, Toast.LENGTH_SHORT).show()
                    val loginInfoTextView = findViewById<TextView>(R.id.LoginInfo)
                    loginInfoTextView.text = "User creation failed.\n\n $errorMessage"
                    updateUI(null)
                }
            }
    }

    private fun updateUI(user: FirebaseUser?) {
        if (user != null) {
            val intent = Intent(this, DisplayUserInfo::class.java)
            startActivity(intent)
            finish()
        }
    }

    //Create a new signIn method which takes in an email address and password, validates them, and
    // then signs a user in with the signInWithEmailAndPassword method.
    private fun signIn(email: String, password: String) {
        auth.signInWithEmailAndPassword(email, password)
            .addOnCompleteListener(this) { task ->
                if (task.isSuccessful) {
                    // Sign in success, update UI with the signed-in user's information
                    Log.d(TAG, "signInWithEmail:success")
                    val loginInfoTextView = findViewById<TextView>(R.id.LoginInfo)
                    loginInfoTextView.text = "Sign in successful!"
                    val user = auth.currentUser
                    updateUI(user)
                } else {
                    // If sign in fails, display a message to the user.
                    Log.w(TAG, "signInWithEmail:failure", task.exception)
                    val errorMessage = task.exception?.message?.substringAfter("] ") ?: "Authentication failed."
                    Toast.makeText(baseContext, errorMessage, Toast.LENGTH_SHORT).show()
                    val loginInfoTextView = findViewById<TextView>(R.id.LoginInfo)
                    loginInfoTextView.text = "Sign In failed. \n\n $errorMessage"
                    updateUI(null)
                }
            }
    }
}