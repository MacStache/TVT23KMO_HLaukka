package com.example.loginform

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.Lock
import androidx.compose.material3.Button
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.loginform.ui.theme.LoginFormTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            LoginFormTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    LoginForm(modifier = Modifier.padding(innerPadding))
                }
            }
        }
    }
}

@Composable
fun LoginForm(modifier: Modifier = Modifier) {
    var userName: String by remember { mutableStateOf("") }
    var password: String by remember { mutableStateOf("") }

    Column(
        verticalArrangement = Arrangement.spacedBy(8.dp),
        modifier = modifier.padding(8.dp)
    ) {
        Text(
            text = stringResource(R.string.title),
            color = MaterialTheme.colorScheme.primary,
            fontSize = 24.sp,
            textAlign = TextAlign.Left,
            modifier = Modifier.fillMaxWidth()
        )
        OutlinedTextField(
            value = userName,
            onValueChange = {userName = it},
            label = {Text(text = stringResource(R.string.username))},
            trailingIcon = {
                Icon(
                    imageVector = Icons.Default.Email,
                    contentDescription = stringResource(R.string.username)
                )
            },
            singleLine = true,
            modifier = Modifier.fillMaxWidth()
            )
        OutlinedTextField(
            value = password,
            onValueChange = {password = it},
            label = {Text(text = stringResource(R.string.password))},
            visualTransformation = PasswordVisualTransformation(),
            trailingIcon = {
                Icon(
                    imageVector = Icons.Default.Lock,
                    contentDescription = stringResource(R.string.password)
                )
            },
            singleLine = true,
            modifier = Modifier.fillMaxWidth()
        )
        Button(onClick = { /*TODO*/ })
        {Text(
            text = stringResource(R.string.submit),
            textAlign = TextAlign.Center,
            modifier = modifier.fillMaxWidth())
        }

    }
}

@Preview(showBackground = true)
@Composable
fun LoginFormPreview() {
    LoginFormTheme {
        LoginForm()
    }
}