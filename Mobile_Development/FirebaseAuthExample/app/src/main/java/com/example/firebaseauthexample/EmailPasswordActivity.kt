package com.example.firebaseauthexample

import android.app.Activity
import androidx.lifecycle.viewmodel.compose.viewModel
import android.content.ContentValues.TAG
import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.ImageButton
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.ComposeView
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.credentials.CredentialManager
import androidx.credentials.CustomCredential
import androidx.credentials.GetCredentialRequest
import androidx.credentials.exceptions.GetCredentialCancellationException
import androidx.lifecycle.lifecycleScope
import com.google.android.libraries.identity.googleid.GetGoogleIdOption
import com.google.android.libraries.identity.googleid.GoogleIdTokenCredential
import com.google.firebase.auth.AuthResult
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseUser
import com.google.firebase.auth.GoogleAuthProvider
import com.google.firebase.ktx.Firebase
import com.google.firebase.auth.ktx.auth
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.callbackFlow
import kotlinx.coroutines.launch
import kotlinx.coroutines.tasks.await
import loginviewmodel.LoginViewModel
import java.security.MessageDigest
import java.util.UUID

class EmailPasswordActivity() : AppCompatActivity() {

    //Declare an instance of FirebaseAuth
    private lateinit var auth: FirebaseAuth
    private lateinit var loginViewModel: LoginViewModel


    //In the onCreate() method, initialize the FirebaseAuth instance.
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_email_password)
        // Initialize Firebase Auth
        auth = Firebase.auth
        loginViewModel = LoginViewModel()

        //Get references to the email and password fields and the register and sign in buttons.
        val emailField = findViewById<EditText>(R.id.emailField)
        val passwordField = findViewById<EditText>(R.id.passwordField)
        val registerButton = findViewById<Button>(R.id.registerButton)
        val signInButton = findViewById<Button>(R.id.signInButton)
        val googleSignInButton = findViewById<ImageButton>(R.id.googleSignInButton)
        val composeView = findViewById<ComposeView>(R.id.compose_view)

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

        // Call handleGoogleSignIn directly on button click
        googleSignInButton.setOnClickListener {
            composeView.setContent {
                loginViewModel.handleGoogleSignIn(this@EmailPasswordActivity)
            }
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
        // Implement the reload logic here. Not sure yet what to put here.
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
    private fun handleGoogleSignIn() {
        lifecycleScope.launch {
            googleSignIn().collect { result ->
                result.fold(
                    onSuccess = {
                        Toast.makeText(this@EmailPasswordActivity, "Sign-In Success!", Toast.LENGTH_SHORT).show()
                        // Handle additional success actions
                    },
                    onFailure = { e ->
                        Toast.makeText(this@EmailPasswordActivity, "Sign-In Failed: ${e.message}", Toast.LENGTH_SHORT).show()
                    }
                )
            }
        }
    }

    private suspend fun googleSignIn(context: Context): Flow<Result<AuthResult>> {
        val firebaseAuth = FirebaseAuth.getInstance()
        return callbackFlow {
            try {
                // Initialize Credential Manager
                val credentialManager: CredentialManager = CredentialManager.create(context)

                // Generate a nonce (a random number used once)
                val ranNonce: String = UUID.randomUUID().toString()
                val bytes: ByteArray = ranNonce.toByteArray()
                val md: MessageDigest = MessageDigest.getInstance("SHA-256")
                val digest: ByteArray = md.digest(bytes)
                val hashedNonce: String = digest.fold("") { str, it -> str + "%02x".format(it) }

                // Set up Google ID option
                val googleIdOption: GetGoogleIdOption = GetGoogleIdOption.Builder()
                    .setFilterByAuthorizedAccounts(false)
                    .setServerClientId("Your server client ID")
                    .setNonce(hashedNonce)
                    .build()

                // Request credentials
                val request: GetCredentialRequest = GetCredentialRequest.Builder()
                    .addCredentialOption(googleIdOption)
                    .build()

                // Get the credential result
                val result = credentialManager.getCredential(context, request)
                val credential = result.credential

                // Check if the received credential is a valid Google ID Token
                if (credential is CustomCredential && credential.type == GoogleIdTokenCredential.TYPE_GOOGLE_ID_TOKEN_CREDENTIAL) {
                    val googleIdTokenCredential =
                        GoogleIdTokenCredential.createFrom(credential.data)
                    val authCredential =
                        GoogleAuthProvider.getCredential(googleIdTokenCredential.idToken, null)
                    val authResult = firebaseAuth.signInWithCredential(authCredential).await()
                    trySend(Result.success(authResult))
                } else {
                    throw RuntimeException("Received an invalid credential type")
                }
            } catch (e: GetCredentialCancellationException) {
                trySend(Result.failure(Exception("Sign-in was canceled. Please try again.")))

            } catch (e: Exception) {
                trySend(Result.failure(e))
            }
            awaitClose { }
        }
    }
}