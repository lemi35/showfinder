ShowFinder

ShowFinder is a React application built with Vite that lets users browse and search TV shows, then view detailed information fetched from the IMDb API.

Users can:

Search through a predefined list of TV shows

Select a show from the sidebar

Fetch and display detailed show data (year, genres, rating, plot, image)

Cache fetched data in localStorage for faster reloads

✨ Features

🔍 Search & filter TV shows in real time

📡 Fetch TV show data from the IMDb API

💾 LocalStorage caching to reduce repeated API calls

⚡ Fast development with Vite + HMR

🧩 Modular React components

🎨 Clean and simple UI

🛠️ Tech Stack

React

Vite

JavaScript (ES6+)

IMDb API

CSS

LocalStorage

📂 Project Structure
src/
├── components/
│ ├── Header.jsx
│ ├── SideNav.jsx
│ ├── ShowCard.jsx
│ ├── GenreCard.jsx
│
├── utils/
│ └── index.js # allTVShows & helpers
│
├── App.jsx
├── main.jsx
└── index.css

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/your-username/showfinder.git
cd showfinder

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev
