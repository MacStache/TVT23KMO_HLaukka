plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    // Apply the plugin here
    id("com.google.gms.google-services")
}

android {
    namespace = "com.example.firebaseauthexample"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.example.firebaseauthexample"
        minSdk = 24
        targetSdk = 35
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"

        buildConfigField("String", "GOOGLE_WEB_CLIENT_ID", "\"${project.property("GOOGLE_WEB_CLIENT_ID")}\"")

    }
    buildFeatures {
        buildConfig = true
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11

    }
    kotlinOptions {
        jvmTarget = "11"
    }
}

dependencies {

    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.appcompat)
    implementation(libs.material)
    implementation(libs.androidx.activity)
    implementation(libs.androidx.constraintlayout)

    /*
        These are taken straight from the Firebase documentation.
        I will leave them as is and not update them to library catalogues
        so it's easier to see which libraries are needed for Firebase authentication.
    */

    // Import the BoM for the Firebase platform
    implementation(platform("com.google.firebase:firebase-bom:33.5.1"))
    // Add the dependency for the Firebase Authentication library
    // When using the BoM, you don't specify versions in Firebase library dependencies
    implementation("com.google.firebase:firebase-auth-ktx")
    // Also add the dependency for the Google Play services library and specify its version
    implementation("com.google.android.gms:play-services-auth:21.2.0")
    // Add Android Credentials Manager
    implementation("androidx.credentials:credentials:1.3.0")
    // optional - needed for credentials support from play services, for devices running
    // Android 13 and below.
    implementation("androidx.credentials:credentials-play-services-auth:1.5.0-beta01")

    // Add Compose dependencies
    implementation("androidx.compose.ui:ui:1.7.5")
    implementation("androidx.compose.material3:material3:1.3.1")
    implementation("androidx.compose.ui:ui-tooling-preview:1.7.5")
    implementation("androidx.compose.runtime:runtime:1.7.5")
    implementation("androidx.compose.foundation:foundation:1.7.5")
    implementation("androidx.lifecycle:lifecycle-viewmodel-compose:2.8.0")

    implementation(libs.googleid)
    implementation(libs.androidx.runtime.android)
    implementation(libs.androidx.foundation.android)
    implementation(libs.androidx.material3.android)
    testImplementation(libs.junit)
    androidTestImplementation(libs.androidx.junit)
    androidTestImplementation(libs.androidx.espresso.core)
}