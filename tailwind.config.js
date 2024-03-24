/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}", // Include App.js
        "./components/**/*.{js,jsx,ts,tsx}", // Include everything in components folder
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
