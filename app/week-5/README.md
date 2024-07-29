# DevClub Summer of Code 2024

## App Development: Week 5

### Overview
Week 5 focuses on integrating key functionalities to enhance the application's capabilities. This includes implementing password reset, password change, profile update functionalities, enhancing the UI, and adding animations for a better user experience.

### Goals
- Implement password reset functionality using Firebase Auth.
- Enable users to change their password within the app.
- Allow users to update their profile information.
- Enhance the user interface with swipe-to-refresh functionality.
- Implement basic animations in Flutter to improve the user experience.

## Tasks

## Task 1: Adding Forgot Password
**Objective:**  
Implement the ability for users to reset their password if they forget it.

**Steps:**
1. **Add "Forgot Password" Link:**
    - Add a "Forgot Password" link on the login screen.
2. **Implement Password Reset Functionality:**
    - Use Firebase Auth's password reset functionality.
    - Send password reset emails to users and handle confirmation.

**Resources:**
- [Firebase Auth Password Reset Documentation](https://firebase.google.com/docs/auth/web/manage-users#send_a_password_reset_email)
- [FlutterFire Auth Documentation](https://firebase.flutter.dev/docs/auth/overview/)

## Task 2: Adding Password Change
**Objective:**  
Allow users to change their password within the app.

**Steps:**
1. **Add Password Change Option:**
    - Add a password change option in the user profile section.
2. **Implement Password Change Functionality:**
    - Use Firebase Auth API to change the user's password.
    - Ensure proper validation and error handling for password changes.

**Resources:**
- [Firebase Auth Documentation](https://firebase.google.com/docs/auth)
- [FlutterFire Auth Documentation](https://firebase.flutter.dev/docs/auth/overview/)

## Task 3: Adding Profile Update
**Objective:**  
Enable users to update their profile information.

**Steps:**
1. **Create Profile Update Screen:**
    - Design and create a profile update screen in the app.
2. **Edit and Save Profile Details:**
    - Allow users to edit and save their profile details (e.g., name, email, phone number).
    - Update the user information in Firebase Firestore.

**Resources:**
- [Firebase Firestore Documentation](https://firebase.google.com/docs/firestore)
- [FlutterFire Firestore Documentation](https://firebase.flutter.dev/docs/firestore/overview/)

## Task 4: Making UI More Appealing
**Objective:**  
Enhance the user interface to be more engaging and user-friendly.

**Steps:**
1. **Implement Swipe-to-Refresh:**
    - Use Flutter's `pull_to_refresh` package to add swipe-to-refresh functionality.
    - Ensure smooth and responsive UI interactions.

**Resources:**
- [Flutter Pull to Refresh Documentation](https://pub.dev/packages/pull_to_refresh)
- [Flutter Swipe to Refresh Tutorial](https://flutter.dev/docs/cookbook/gestures/refresh-indicators)

## Task 5: Adding Animations
**Objective:**  
Learn and implement basic animations in Flutter to improve the app's user experience.

**Steps:**
1. **Explore Flutter's Animation Library:**
    - Understand the basics of animations in Flutter.
2. **Implement Simple Animations:**
    - Add animations such as fade in/out, slide transitions, and scale animations.
    - Use animations to enhance UI components like buttons, screens, and transitions.

**Resources:**
- [Flutter Animation Documentation](https://flutter.dev/docs/development/ui/animations)
- [Flutter Animation Tutorials](https://flutter.dev/docs/cookbook/animation)

By following these tasks, you will be able to enhance the functionality and user experience of your application, making it more robust and user-friendly.
