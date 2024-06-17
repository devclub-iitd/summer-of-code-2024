# DevClub Summer of Code 2024

## App Development: Week 1

# Comprehensive PoS Interface - Week 1: Flutter Setup and Basics

## Goals:
- Set up the Flutter development environment.
- Learn basic Flutter widgets needed to create login and register pages.
- Implement login and register pages.
- Learn about shared preferences and use them to store and fetch data.

## Tasks:

### Task 1: Flutter Setup

**Objective:** Install and set up the Flutter development environment.

1. **Install Flutter SDK:**
   - Visit the official [Flutter installation page](https://flutter.dev/docs/get-started/install) and follow the instructions for your operating system (Windows, macOS, or Linux).
   - Ensure you have the following prerequisites installed:
     - Git
     - A code editor like VS Code or Android Studio

2. **Set Up IDE:**
   - **VS Code:**
     - Install [Visual Studio Code](https://code.visualstudio.com/).
     - Install the Flutter and Dart extensions from the VS Code Marketplace.
   - **Android Studio:**
     - Download and install [Android Studio](https://developer.android.com/studio).
     - Install the Flutter plugin through the Plugin Manager.

3. **Configure an Android/iOS Emulator:**
   - Follow the [Flutter device setup guide](https://flutter.dev/docs/get-started/install#android-setup) to set up an Android or iOS emulator.

4. **Verify Installation:**
   - Open a terminal and run the following command to verify your Flutter installation:
     ```sh
     flutter doctor
     ```

### Resources:
- [Flutter Installation Guide](https://flutter.dev/docs/get-started/install)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Android Studio](https://developer.android.com/studio)

### Task 2: Learn Basic Flutter Widgets

**Objective:** Understand and implement basic Flutter widgets needed for creating login and register pages.

1. **Widgets to Learn:**
   - `Container`
   - `Row` and `Column`
   - `Text`
   - `TextField`
   - `ElevatedButton`
   - `Scaffold`

2. **Showing Snackbar**
   - The `ScaffoldMessenger` widget in Flutter provides an easy way to display snackbars, material banners, and other messages in your app.
   - Use ScaffoldMessenger.of(context).showSnackBar to display a snackbar.

### Resources:
- [Flutter Widget Catalog](https://flutter.dev/docs/development/ui/widgets)
- [Build Layouts with Flutter](https://flutter.dev/docs/development/ui/layout)
- [Showing Snackbar](https://docs.flutter.dev/cookbook/design/snackbars)

### Task 3: Learn About Routing

**Objective:** Understand and implement navigation and routing in Flutter.

1. **Basic Routing:**
   - Use `Navigator.push` and `Navigator.pop` for simple navigation.

2. **Named Routes:**
   - Define named routes for better navigation management.

### Resources:
- [Flutter Navigation and Routing](https://flutter.dev/docs/development/ui/navigation)

### Task 4. Adding Assets to Your Project

**Objective:** Learn to add images in the UI to make it more attractive .

1. **Create an `assets` directory**:
   - In the root directory of your Flutter project, create a new folder named `assets`.

2. **Add your asset files**:
   - Place your image files (or other assets) inside the `assets` directory. You can organize them further into subdirectories if needed (e.g., `assets/images/`).

3. **Declare Assets in `pubspec.yaml`**:

    1. **Open `pubspec.yaml`**:
    - In the root directory of your Flutter project, open the `pubspec.yaml` file.

    2. **Declare your assets**:
    - Under the `flutter` section, declare your assets as follows:
        ```yaml
        flutter:
        assets:
            - assets/images/
            - assets/images/your_image.png
        ```

4. **Loading Images from Assets**:
   - Use the `Image.asset` widget to load an image from your assets:
    

5. **Loading Images from the Network**:
   - Use the `Image.network` widget to load an image from a network URL
     
## Resources

- [Flutter Documentation: Adding Assets and Images](https://flutter.dev/docs/development/ui/assets-and-images)
- [Image.asset Widget](https://api.flutter.dev/flutter/widgets/Image/Image.asset.html)
- [Image.network Widget](https://api.flutter.dev/flutter/widgets/Image/Image.network.html)

### Task 5: Create Login and Register Pages

**Objective:** Implement login and register pages using given figma file.

1. **Login Page:**
   - Create a new screen for the login page.
   - Use `TextField` for username and password inputs.
   - Add an `ElevatedButton` for the login action.

2. **Register Page:**
   - Create a new screen for the register page.
   - Use `TextField` for user details (username, email, password, etc.).
   - Add an `ElevatedButton` for the register action.

### Resources:
- [Figma Design](https://www.figma.com/design/NQytFjSrYgAD3eN9I6tgBZ/DSOC-2024?node-id=0-1&t=2VvPwuvaPHQIxCO8-0)
- [Form Validation in Flutter](https://flutter.dev/docs/cookbook/forms/validation)
- [Handling User Input](https://flutter.dev/docs/development/ui/interactive)


### Task 6: Learn About Shared Preferences

**Objective:** Learn how to use shared preferences to store and fetch data for login and registration purposes.

1. **Install Shared Preferences Package:**
   - Add the `shared_preferences` package to your `pubspec.yaml` file:
     ```yaml
     dependencies:
       shared_preferences: ^2.0.6
     ```

2. **Using Shared Preferences:**
   - Store user data upon registration.
   - Fetch and validate user data during login.

### Resources:
- [Shared Preferences in Flutter](https://pub.dev/packages/shared_preferences)



### BONUS TASKS


## Task 1: Improve UI and Use Progress Indicators

**Objective:** Enhance the UI and add progress indicators for better user experience.

1. **Improve UI:**
   - Use `Padding` and `Margin` for better spacing.
   - Apply `BoxDecoration` to `Container` for rounded corners and shadows.

2. **Progress Indicators:**
   - Use `CircularProgressIndicator` or `LinearProgressIndicator` while waiting for data or during long-running operations.

### Resources:
- [Flutter Layout and Styling](https://flutter.dev/docs/development/ui/layout)
- [Progress Indicators in Flutter](https://flutter.dev/docs/cookbook/progress/progress-indicators)


## Task 2: Check Internet Connectivity

**Objective:** Learn how to check and handle internet connectivity.

1. **Install Connectivity Package:**
   - Add the `connectivity_plus` package to your `pubspec.yaml` file:
     ```yaml
     dependencies:
       connectivity_plus: ^2.0.2
     ```

2. **Using Connectivity Package:**
   - Check the internet connection status and handle changes.

### Resources:
- [Internet Connectivity in flutter](https://pub.dev/packages/connectivity_plus/example)


## Task 3: Learn about all types of Dialogs
   - Dialogs are important UI components in mobile applications for displaying critical information, alerts, prompts, or receiving user input. In Flutter, developers should learn about the following types of dialogs:

    1. AlertDialog
    2. SimpleDialog
    3. Custom Dialogs

### Resources
- [AlertDialog class documentation](https://api.flutter.dev/flutter/material/AlertDialog-class.html)
- [SimpleDialog class documentation](https://api.flutter.dev/flutter/material/SimpleDialog-class.html)
- [Dialog class documentation](https://api.flutter.dev/flutter/material/Dialog-class.html)