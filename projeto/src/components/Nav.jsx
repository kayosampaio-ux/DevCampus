import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav>
      <Link to="/">Início</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/cursos">Cursos</Link>
      <Link to="/ingresso">Ingresso</Link>
      <Link to="/noticias">Notícias</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  )
}

export default Nav