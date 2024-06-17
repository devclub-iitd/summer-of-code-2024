# DevClub Summer of Code 2024: Frontend Development Track

## Point of Sales (PoS) System

This project aims to develop a sophisticated Point of Sales (PoS) system to streamline inventory management and sales processes. The system includes features for user authentication, customer management, inventory management, sales tracking, file uploading, invoice generation, payment gateway integration, and state management.

#### Why Use Flutter for PoS Development?

1. **Single Codebase for Multiple Platforms:** Write your application code once and deploy it across Android, iOS, web, and desktop platforms without needing to rewrite it for each platform.

2. **Hot Reload:** Flutter’s hot reload feature allows developers to see the results of code changes in real-time without restarting the app. This significantly speeds up the development process by enabling quick iterations.

3. **Rich Set of Widgets:** Flutter includes a comprehensive set of pre-designed widgets that follow both Material Design (for Android) and Cupertino (for iOS) guidelines. These widgets are highly customizable, enabling developers to create visually appealing and highly responsive user interfaces


4. **Cross-Platform Development:** By using Flutter, PoS system can be developed once and deploy it on multiple platforms, saving time and      resorces
    
5. **Efficient Development:** Flutter’s hot reload feature accelerates the development process by allowing developers to instantly view the impact of their changes.

6. **Customizable UI:** The rich set of widgets provided by Flutter enables the creation of a highly customizable and responsive user interface, tailored to the specific needs of the PoS system.

7. **Strong Community Support:** The extensive documentation and active community support available for Flutter help in addressing development issues and leveraging best practices.


## Core Components for PoS Development

### User Authentication

- **Email-Based Login**: Use Firebase Authentication to allow users to log in using their email and password.

- **Google-Based Login**: Integrate Google Sign-In for a seamless login experience using Google accounts.


### Customer Management

- **Data Storage**: Use Firebase Firestore for storing and retrieving customer data, ensuring real-time updates and scalability.


#### Form Handling

- **Form Handling**: Implement user-friendly forms for new customer registration and data updates.

### Inventory Management

- **Real-Time Updates**: Use Firestore to track inventory changes in real-time, ensuring up-to-date stock levels.

- **Barcode Scanning**: Integrate barcode scanning functionality using third-party libraries like `flutter_barcode_scanner`.

### Sales Tracking

- **Firebase Analytics**: Use Firebase Analytics to track sales data, including transaction details, customer behavior, and revenue metrics.

- **Trackable Data**: Monitor metrics such as total sales, average transaction value, top-selling products, and customer visit frequency.


### File Uploading and Invoice Generation

- **Firebase Storage**: Use Firebase Storage to upload and store files such as product images, receipts, and invoices.

- **Invoice Generation**: Generate invoices for each transaction and store them in Firebase Storage.


### Payment Gateway Integration

- **Stripe**: Integrate Stripe for secure online payments, supporting various payment methods like credit cards, Apple Pay, and Google Pay.
#### OR
- **RazorPay**: Use Razorpay for a comprehensive payment solution, supporting multiple payment options including UPI, net banking, and wallets.

### State Management

- **BLoC Library**: Use the BLoC (Business Logic Component) library for managing the state of the application. This pattern helps separate business logic from UI code, making the app more modular and testable.

- **Provider Library**: Use the Provider library for state management, offering a simple way to manage state across the application and ensuring efficient rebuilding of UI components.


## Week 1

1. **Setting up Flutter and Visual Studio Code (VSCode):** Start by installing Flutter and setting up Visual Studio Code on your local PC. This will ensure a seamless Flutter app development experience. Additionally, we will introduce you to essential VSCode extensions specifically tailored for Flutter development, enhancing your coding experience.

2. **Widgets: Stateless and Stateful:** Learn about the concepts of stateless and stateful widgets, which are the building blocks of Flutter UIs. Understand the differences between them and when to use each. Create visually appealing layouts using widgets such as Column, Row, Scaffold, Container, and others.

3. **Lists and Grids:** Explore working with lists and grids to manage dynamic data. Learn how to create scrollable lists and grids using Flutter widgets, improving the organization and efficiency of displaying and interacting with data in your app.

4. **Form and Validation:** Forms play a vital role in capturing user input. We will cover the process of building forms in Flutter, including form validation techniques to ensure accurate data submission. You will learn how to create input fields, validate user input, and provide real-time feedback.

5. **Naviagtion and Routes:** Understand and implement navigation and routing in Flutter.

6. **Shared Preference:** Useful for storing small amount of data.You will learn how to store data.

6. **Introduction to pub.dev:** Discover pub.dev, a central repository for Flutter packages. Learn how to search, evaluate, and integrate packages into your Flutter projects. Find ready-to-use components and utilities that can enhance your app's functionality.

7. **Login/SignUp Page:** Replicate given figma design in Flutter and use it to authenticate user by storing data in shared preferences.


## Week 2

- **Provider Package**: Learn to use the Provider package for state management in Flutter.
  - Add the `provider` package to your Flutter project.
  - Implement a simple state management example using Provider.
  - Refactor existing state management code to use Provider.

- **Developing Barcode Scanner**: Implement barcode scanning functionality to enhance inventory management.
  - Add the `flutter_barcode_scanner` package to your Flutter project.
  - Implement barcode scanning in the inventory management screen.
  - Ensure scanned data is stored in local preferences.
  - Showing scanned product list on the screen.

- **OOP Concepts in Dart**: Understand the basics of object-oriented programming (OOP) in Dart.
  - Learn to create classes, objects, and methods in Dart.
  - Understand inheritance, polymorphism, and encapsulation.
  - Implement basic OOP concepts in your Flutter project.

- **Profile Page:**: Implement profile page and also logout functions.


## Week 3

- **Checking Internet Connectivity**: Ensure the application can handle internet connectivity changes.
  - Add the `connectivity_plus` package to your Flutter project.
  - Implement functionality to check internet connectivity status.
  - Handle offline scenarios and provide user feedback.

- **Firebase Authentication**: Implement user authentication using Firebase Authentication.
  - Set up Firebase Authentication in your Flutter project.
  - Create authentication screens (login, registration, and password reset).
  - Implement email-based, Google-based, and phone-based login methods.
  - Refactor your existing Auth pages to use firebase authentication.

- **Using Firestore**: Use Firebase Firestore for database management.
  - Set up Firestore in your Flutter project.
  - Design database schema for customers, products, and transactions.
  - Implement CRUD operations for managing data in Firestore.

- **Using Firebase Storage**: Implement file storage using Firebase Storage.
  - Set up Firebase Storage in your Flutter project.
  - Implement functionality to upload and retrieve files.
  - Use Firebase Storage to store product images and generated invoices.

- **Implementing Checkout Page UI**: Develop a checkout page for processing transactions.
  - Design and implement a checkout page UI.
  - Update scanned products on the screen along with their prices,name,quantity.



## Week 4

- **API calling**: Implement HTTP calls to interact with external APIs for additional functionality such as payment confirmations or order tracking.
  - Add `http` package to your Flutter project.
  - Implement functionality to make GET, POST, PUT, and DELETE requests.
  - Handle responses and errors appropriately.
  - Use HTTP calls to integrate third-party services or APIs as needed.

- **Payment Gateway Integration**: Finalize and integrate the payment gateway for the application.
  - Finalize the choice between Stripe and Razorpay for payment processing.
  - Implement the chosen payment gateway in the checkout process.
  - Test payment transactions to ensure successful integration.

- **Invoice Generation and Storage**: Refine the invoice generation and storage process.
  - Enhance the PDF invoice generation to include all necessary transaction details.
  - Ensure that invoices are correctly uploaded to Firebase Storage.
  - Implement a feature to email invoices to customers post-transaction.

- **Updating Sales Data on Firestore**: Ensure sales data is accurately updated in Firestore after each transaction.
  - Design a comprehensive sales data structure in Firestore.
  - Implement functionality to update sales records in Firestore after each transaction.
  - Ensure real-time synchronization of sales data across the application.

- **Firebase Analytics**: Implement Firebase Analytics to track user interactions and sales data.
  - Set up Firebase Analytics in your Flutter project.
  - Define and implement custom events for key user interactions and sales activities.
  - Use Firebase Analytics to track and analyze data such as total sales, average transaction value, customer engagement, and product performance.


## Week 5

- **Adding Forgot Password**: Implement the ability for users to reset their password if they forget it.
  - Add a "Forgot Password" link on the login screen.
  - Implement Firebase Auth's password reset functionality.
  - Send password reset emails to users and handle confirmation.

- **Adding Password Change**: Allow users to change their password within the app.
  - Add a password change option in the user profile section.
  - Implement password change functionality using Firebase Auth API.
  - Ensure proper validation and error handling for password changes.

- **Adding Profile Update**: Enable users to update their profile information.
  - Create a profile update screen.
  - Allow users to edit and save their profile details (e.g., name, email, phone number).
  - Update the user information in Firebase Firestore.

- **Making UI More Appealing**: Enhance the user interface to be more engaging and user-friendly.
  - Implement swipe-to-refresh functionality to update content.
  - Use Flutter's `pull_to_refresh` package to add swipe-to-refresh.
  - Ensure smooth and responsive UI interactions.

- **Adding Animations**: Learn and implement basic animations in Flutter to improve the app's user experience.
  - Explore Flutter's animation library and understand the basics of animations.
  - Implement simple animations such as fade in/out, slide transitions, and scale animations.
  - Use animations to enhance UI components like buttons, screens, and transitions.


### Learning Resources
- **Provider State Management**: [Provider Documentation](https://pub.dev/packages/provider)
- **Barcode Scanning**: [flutter_barcode_scanner](https://pub.dev/packages/flutter_barcode_scanner)
- **OOP Concepts in Dart**: [Dart Programming - OOP Concepts](https://dart.dev/guides/language/language-tour#classes)
- **Firebase Authentication**: [Firebase Authentication for Flutter](https://firebase.flutter.dev/docs/auth/usage/)
- **Firestore**: [Cloud Firestore for Flutter](https://firebase.flutter.dev/docs/firestore/usage/)
- **Firebase Storage**: [Cloud Storage for Flutter](https://firebase.flutter.dev/docs/storage/usage/)
- **PDF Generation**: [flutter_pdf](https://pub.dev/packages/pdf)
- **Payment Gateways**: [Stripe for Flutter](https://stripe.com/docs/payments/accept-a-payment), [Razorpay for Flutter](https://razorpay.com/docs/payment-gateway/flutter/)
- **HTTP Requests**: [http package](https://pub.dev/packages/http)
- **Connectivity**: [connectivity_plus](https://pub.dev/packages/connectivity_plus)
- **Firebase Analytics**: [Firebase Analytics for Flutter](https://firebase.flutter.dev/docs/analytics/overview/)
- **Swipe to Refresh**: [pull_to_refresh](https://pub.dev/packages/pull_to_refresh)
- **Animations**: [Animations in Flutter](https://flutter.dev/docs/development/ui/animations/)