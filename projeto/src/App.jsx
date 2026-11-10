import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Inicio from "./pages/Inicio"
import Sobre from "./pages/Sobre"
import Cursos from "./pages/Cursos"
import Ingresso from "./pages/Ingresso"
import Noticias from "./pages/Noticias"
import Contato from "./pages/Contato"
import NotFound from "./pages/NotFound"
import "./App.css"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/ingresso" element={<Ingresso />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App