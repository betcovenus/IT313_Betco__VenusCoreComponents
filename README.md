# IT 313 – Laboratory 6
## Student Directory Viewer

### Project Description

The Student Directory Viewer is a simple mobile application developed using React Native and Expo. It allows an adviser to view a list of students who need academic advising.

The application includes a search feature to find students by name and a flag button to mark students for advising.

### Components Used

**1. StudentCard.tsx**

This component displays the student's photo, name, year level, and Flag for Advising button. It uses View, Image, Text, and Pressable.

**2. StudentDirectory.tsx**

This is the parent component that manages the student list, search query, and flag status. It uses useState, TextInput, ScrollView, and map() to display and filter the students.

### React Native Core Components

- View – Organizes the student card layout.
- Text – Displays student information.
- Image – Displays student photos.
- ScrollView – Allows users to scroll through the student list.
- TextInput – Allows users to search for students.
- Pressable – Allows users to flag or unflag students.

### Features

- Displays five student records.
- Searches students by name.
- Supports case-insensitive searching.
- Allows users to flag students for advising.
- Changes the button appearance when flagged.
- Displays a message when no matching student is found.

### How to Run the Application

1. Open the project folder in VS Code.
2. Open the terminal.
3. Install dependencies using:

   npm install

4. Start the Expo development server:

   npx expo start

5. Scan the QR code using Expo Go.

### Developer

Venus D. Betco

IT 313 – Mobile Programming