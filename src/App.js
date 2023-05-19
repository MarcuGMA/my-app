import "./scss/index.scss"
import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Main from "./pages/Main"
import GamePage from "./pages/GamePage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import CategoriesGames from "./pages/CategoriesGames"
import gamesData from "./api/gameData"
import AboutUs from "./pages/AboutUs"
import Collections from "./pages/Collections";

function App() {


  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/gamePage" element={<GamePage />} />
          <Route path="/categories" element={<CategoriesGames />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/collections" element={<Collections />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
