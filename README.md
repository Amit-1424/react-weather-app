# Weather App

A simple weather application built with React to practice component structure, API integration, and state management. The app allows users to search for a city and view current weather information.

## Live Demo

* **Live App:** https://react-weather-app-seven-sage.vercel.app/
* **GitHub Repository:** https://github.com/Amit-1424/react-weather-app

## Overview

This project fetches real-time weather data from the OpenWeather API and displays it in a clean UI.
It was built mainly to practice React concepts like components, props, state, and API calls.

## Tech Stack

* React
* Vite
* Material UI
* OpenWeather API
* JavaScript (ES6)
* CSS

## Folder Structure

```
src
 ├ App.jsx
 ├ WeatherApp.jsx
 ├ SearchBox.jsx
 ├ InfoBox.jsx
 ├ App.css
 ├ WeatherApp.css
 ├ SearchBox.css
 └ InfoBox.css
```

## Features

* Search weather by city name
* Real-time data using OpenWeather API
* Displays temperature, humidity, pressure, and wind speed
* Handles invalid city inputs
* Shows weather info only after search
* Disables search button during API request

## Environment Variables

Create a `.env` file in the project root:

```
VITE_WEATHER_API_KEY=your_api_key_here
```

This key is used to fetch weather data from the API.

## Installation

Clone the repository:

```
git clone https://github.com/yourusername/weather-app.git
```

Move into the project folder:

```
cd weather-app
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Build for production:

```
npm run build
```

## What I Learned

* React component structure
* Passing data using props
* Managing state with `useState`
* Fetching API data in React
* Handling asynchronous requests
* Using environment variables in Vite
* Basic UI building with Material UI

## Author

Your Name
GitHub: https://github.com/Amit-1424
