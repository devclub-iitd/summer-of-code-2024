# DevClub Summer of Code 2024

## App Development: Week 2

### Goals:
1. Learn to use the Provider package for state management in Flutter.
2. Implement barcode scanning functionality to enhance inventory management.
3. Understand the basics of object-oriented programming (OOP) in Dart.
4. Implement a profile page and logout functions.

## Tasks:

### Task 1: Provider Package

**Objective:** Use the Provider package for state management.

1. **Add the Provider package:** Add the `provider` package to your Flutter project by including it in your `pubspec.yaml` file:
  ```yaml
  dependencies:
    provider: ^6.0.0
  ```
      
2. **Handle Loading State of Auth Pages**
    - Use Provider to manage the loading state during authentication (login and registration).
    - Display loading indicators appropriately.

3. **State Management of User Data and Products**
    - updtae user screen after scanning product using provider
    - Manage user data after login using Provider.
    - Display user data on various pages using provider

4. **Refactor Existing State Management Code**
    - Refactor any existing state management code in your project to use Provider.

### Resources
- [Provider Package Documentation](https://pub.dev/packages/provider)
- [Flutter State Management with Provider](https://flutter.dev/docs/development/data-and-backend/state-mgmt/simple)

### Task 2: OOP Concepts in Dart

### Objective
- Understand the basics of object-oriented programming in Dart.

### Steps

1. **Learn to Create Classes, Objects, and Methods**
    - Understand how to create and use classes, objects, and methods in Dart.

2. **Understand Inheritance, Polymorphism, and Encapsulation**
    - Learn about these core OOP concepts and how they are implemented in Dart.

3. **Use OOP to Make User Model and Product Classes**
    - Create user and product classes to store data.

4. **Implement Basic OOP Concepts in Your Flutter Project**
    - Apply OOP principles in your Flutter project for better code organization and management.

### Resources
- [Dart Language Tour](https://dart.dev/guides/language/language-tour)
- [Object-Oriented Programming in Dart](https://dart.dev/guides/language/language-tour#object-oriented-programming)


### Task 3: Developing Barcode Scanner

### Objective
- Implement barcode scanning functionality.

### Steps

1. **Add the `flutter_barcode_scanner` Package**
    - Add the `flutter_barcode_scanner` package to your Flutter project by including it in your `pubspec.yaml` file:
    ```yaml
    dependencies:
      flutter_barcode_scanner: ^2.0.0
    ```
2. **Manage Permissions with `permission_handler`**
    - Request permission for camera access using `permission_handler` package.
    - Handle permission responses and display appropriate UI based on permission status

3. **Android Manifest Configuration**

   - Add the following permissions to your Android manifest (`android/app/src/main/AndroidManifest.xml`) file:
    ```xml
    <uses-permission android:name="android.permission.CAMERA"/>

4. **Implement Barcode Scanning**
    - Integrate barcode scanning in your inventory management screen.

5. **Store Scanned Data in Local Preferences**
    - Use the `shared_preferences` package to store scanned data.

6. **Show Scanned Product List on the Screen**
    - Display the list of scanned products in your inventory management screen.

### Resources
- [flutter_barcode_scanner Package Documentation](https://pub.dev/packages/flutter_barcode_scanner)
- [Shared Preferences in Flutter](https://flutter.dev/docs/cookbook/persistence/key-value)
- [Permissin handler](https://pub.dev/packages/permission_handler)


### Task 4: Profile Page

### Objective
- Implement a profile page and logout functions.

### Steps

1. **Create a Profile Page**
    - Design and implement a profile page that displays user information.

2. **Implement Logout Functionality**
    - Add functionality to log out the user from the application.

3. **Use Provider for State Management**
    - Manage the state of the profile page and logout functionality using Provider.

### Resources
- [Building a Profile Page in Flutter](https://flutter.dev/docs/cookbook/ui/user-profile)
- [Implementing Logout in Flutter](https://flutter.dev/docs/cookbook/networking/authentication)
- [Flutter Provider Package](https://pub.dev/packages/provider)