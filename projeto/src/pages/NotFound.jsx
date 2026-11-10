import { Link } from "react-router-dom"

function NotFound() {
  return (
    <main>
      <h1>404</h1>
      <p>Página não encontrada. O endereço que você digitou não existe.</p>
      <Link to="/" className="botao">Voltar para o início</Link>
    </main>
  )
}

export default NotFound