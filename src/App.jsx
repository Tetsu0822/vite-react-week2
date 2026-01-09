import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import AlbumLayout from "./pages/AlbumLayout.jsx";
import AlbumIndex from "./pages/AlbumIndex.jsx";

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/album" element={<AlbumLayout />}>
            <Route index element={<AlbumIndex />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
