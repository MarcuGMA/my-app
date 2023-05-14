import "./scss/index.scss"
import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Main from "./pages/Main"

import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
