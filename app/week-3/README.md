# DevClub Summer of Code 2024

## App Development: Week 3

### Overview
Week 3 focuses on integrating Firebase services such as Authentication, Firestore, and Firebase Storage. It also involves ensuring the application can effectively manage changes in internet connectivity, providing feedback to users.

### Goals:
1. Implement Firebase functionalities including Authentication, Firestore, and Firebase Storage.
2. Handle internet connectivity changes and provide feedback to users.
3. Develop user-friendly interfaces for product management and checkout processes.



### Firebase Project Setup Guide

Setting up Firebase for your Flutter project involves several critical steps. Here, we'll walk you through creating a new Firebase project, registering your app with Firebase, and configuring your Flutter app to use Firebase.

#### Step 1: Create a New Project in Firebase Console

1. **Open Firebase Console:**
   - Navigate to [Firebase Console](https://console.firebase.google.com/).
   - You may need to log in with your Google account.

2. **Add a New Project:**
   - Click on the "Add project" button.
   - Enter your project name and follow the on-screen instructions.
   - Select or create a Google Analytics account if required (optional but recommended for analytics).

#### Step 2: Register Your App with Firebase

1. **Add Your App to the Firebase Project:**
   - Inside the Firebase project dashboard, click on the Web icon to add a new web app, or select the Android or iOS icon to add a mobile app, depending on your project needs.
   - For an Android app, enter your app’s package name which you can find in your Flutter project’s `AndroidManifest.xml` file under `package="com.example.yourapp"`.
   - Follow the prompts to name your app and register it.

2. **Download Configuration File:**
   - For Android, download the `google-services.json` file.
   - For iOS, download the `GoogleService-Info.plist` file.

#### Step 3: Add the Configuration File to Your Project

1. **Place the Configuration File:**
   - For Android:
     - Place the `google-services.json` file in your Flutter project under `android/app/src/main/`.
   - For iOS:
     - Place the `GoogleService-Info.plist` in the `ios/Runner` folder of your Flutter project.

2. **Update Your Project Settings:**
   - For Android, ensure that the Google services plugin is applied in your Gradle build script:
     - Add `classpath 'com.google.gms:google-services:4.3.10'` (check for latest version) to your project level `build.gradle` file under `dependencies`.
     - Add `apply plugin: 'com.google.gms.google-services'` at the bottom of the app-level `build.gradle` file.

#### Step 4: Sync Your Project

- **Sync Project with Gradle Files:**
  - Open your Flutter project and perform a Gradle sync in Android Studio or IntelliJ to ensure all dependencies are correctly configured.

- **Run Flutter Packages Get:**
  - Run `flutter packages get` in your terminal or use your IDE to sync all Dart packages.

#### Final Steps

- **Run Your Application:**
  - Run your Flutter application to ensure that it initializes Firebase correctly on startup. Look for any logs in the console that confirm Firebase has been initialized successfully.

#### Resources:

- [Firebase Official Setup Guide](https://firebase.google.com/docs/android/setup)
- [FlutterFire Documentation](https://firebase.flutter.dev/docs/overview)

## Tasks:

### Task 1: Checking Internet Connectivity

**Objective:** Ensure the application gracefully handles changes in internet connectivity, providing feedback to users.

#### Steps:
1. **Add the `connectivity_plus` package:**
   ```yaml
   dependencies:
     connectivity_plus: ^2.0.2

2. **Implement connectivity status monitoring:**
    - Use the package to monitor connectivity changes.
    - Implement logic to handle connectivity state changes and update the UI accordingly

3.  **Provide user feedback:**
    - Use visual indicators or messages to inform users when the internet connection is lost or re-established.

#### Resources:
- [Connectivity Plus Package](https://pub.dev/packages/connectivity_plus)


### Task 2: Firebase Authentication

**Objective:** Securely authenticate users using Firebase Authentication.

#### Steps:

1. **Set up Firebase Authentication:**
   - Configure Firebase in your Flutter project.
   - Enable email and google-login authentication methods.

2. **Add Options for both email and google-login methods:**
   - refactor UI to give option for google-login

2. **Integrate Firebase Authentication:**
   - Refactor existing authentication logic to use Firebase Authentication for Admins and Users.

#### Resources:
- [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)
- [Firebase Console](https://console.firebase.google.com/)

### Task 3: Using Firestore
**Objective:** Utilize Firebase Firestore for efficient data management.

#### Steps:
1. **Configure Firestore:**
   - Integrate Firestore into your Flutter project.
   - Set up connection settings.

2. **Design database schema:**
   - Define collections for customers, admins, products, and transactions.
   - Ensure transaction documents include product details, payment ID, and invoice URL(if any).

3. **Design Database models in flutter**
   - Add models for products,users and admins in Dart for efficient data management in App

3. **Implement CRUD operations:**
   - Develop functionalities for adding, retrieving, updating, and deleting data.

#### Resources:
- [Firebase Firestore Documentation](https://firebase.google.com/docs/firestore)

### Task 4: Firebase Storage
**Objective:** Manage file storage using Firebase Storage.

#### Steps:
1. **Set up Firebase Storage:**
   - Integrate Firebase Storage into your project.

2. **Implement file upload and retrieval:**
   - Create functionalities to upload and retrieve files, specifically for product images and invoices.

#### Resources:
- [Firebase Storage Documentation](https://firebase.google.com/docs/storage)

### Task 5: Product Addition and Checkout UI
**Objective:** Develop interfaces for managing products and processing transactions.

#### Steps:
1. **Product addition page for admins:**
   - Allow admins to add product information by scanning barcodes and entering details manually in this page.

2. **Develop checkout page UI:**
   - Fetch product data from firestore using barcode number.In case Product is not present,add new product using Prodcut addition page.
   - Design and implement a checkout interface that updates in real-time as products are scanned.

#### Resources:
- [Flutter UI Development](https://flutter.dev/docs/development/ui)





