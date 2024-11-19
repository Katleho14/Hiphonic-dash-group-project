


# Hiphonic Dash Group Project

## Overview

Hiphonic is a modern web application built with React and Vite, designed to provide an interactive dashboard for managing various aspects of a business. This project features real-time data visualization, user-friendly navigation, and a responsive design.

![Project Screenshot](./public/Screenshot%202024-11-19%20075326.png)

## Features

- **React + Vite Setup**: A minimal setup to get React working with Vite, providing fast refresh and build capabilities.
- **Dynamic Routing**: Utilizes React Router for seamless navigation between different pages.
- **Data Visualization**: Integrates various charts using Nivo for visual representation of data such as sales and user activity.
- **Responsive Design**: Built with Tailwind CSS for a fully responsive layout.
- **User Notifications**: Includes a toast notification system for user interactions.
- **Dashboard Components**: Includes components for displaying statistics, transactions, and product information.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hiphonic-dash-group-project.git
   cd hiphonic-dash-group-project

2. install dependencies
   npm install

 3. Start the development server  
    npm run dev

4.  Open your browser and navigate to http://localhost:8080. 


Project Structure

hiphonic-dash-group-project/
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page components
│   ├── charts/             # Chart components
│   ├── lib/                # Utility functions
│   ├── App.jsx             # Main application component
│   └── main.jsx            # Entry point for React
├── public/                 # Static assets
├── index.html              # Main HTML file
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── package.json            # Project metadata and dependencies