# Piano Chord Finder

This is a simple piano chord finder application built with React. It allows users to press keys on a virtual piano, and it will identify the chord being played. Users can also save chords and play them back.

## Developer Documentation

### Tech Stack

*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tone.js:** A Web Audio framework for creating interactive music in the browser.
*   **Tonal:** A functional music theory library.
*   **Sass:** A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
*   **React Scripts:** A set of scripts from Create React App for running and building React applications.

### Project Structure

The project follows a standard Create React App folder structure.

*   `public/`: Contains the public assets of the application, such as `index.html`.
*   `src/`: Contains the main source code of the application.
    *   `components/`: Contains the React components.
    *   `constants/`: Contains the constants used in the application.
    *   `hooks/`: Contains the custom React hooks.
    *   `scss/`: Contains the Sass files for styling.
*   `package.json`: Contains the project's dependencies and scripts.
*   `tsconfig.json`: Contains the TypeScript configuration.
*   `vercel.json`: Contains the Vercel configuration.

### Getting Started

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/piano.git
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm start
    ```
The application will be available at `http://localhost:3000`.

### Available Scripts

*   `npm start`: Runs the application in development mode.
*   `npm build`: Builds the application for production.
*   `npm test`: Runs the tests.
*   `npm eject`: Ejects the application from Create React App.

## User Flow Documentation

### Introduction

This application is a virtual piano that helps you identify chords. You can press the keys on the piano, and the application will tell you what chord you are playing. You can also save the chords you find and play them back later.

### Features

*   **Virtual Piano:** A fully functional virtual piano that you can play with your mouse.
*   **Chord Detection:** The application will automatically detect the chord you are playing.
*   **Save Chords:** You can save the chords you find to a list.
*   **Play Saved Chords:** You can play back the saved chords in sequence.

### How to Use

1.  **Start the application:** When you first open the application, you will see a "Start" button. Click this button to start the audio.
2.  **Play the piano:** Click on the piano keys to play notes.
3.  **Find a chord:** Press at least three keys to form a chord. The application will display the name of the chord you are playing.
4.  **Play the chord:** Click the "Play Chord" button to hear the chord you are playing.
5.  **Save the chord:** Click the "Save Chord" button to save the chord to your list of saved chords.
6.  **Play all saved chords:** Click the "Play All" button to play all the chords you have saved.
7.  **Clear all saved chords:** Click the "Clear All" button to clear the list of saved chords.