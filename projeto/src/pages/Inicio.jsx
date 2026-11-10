import { Link } from "react-router-dom"

function Inicio() {
  return (
    <main>
      <section className="hero">
        <h1>Bem-vindo à Faculdade Horizonte</h1>
        <p>Formação de qualidade para quem quer transformar o futuro.</p>
        <Link to="/ingresso" className="botao">Quero ingressar</Link>
      </section>

      <section>
        <h2>Destaques</h2>
        <ul className="destaques">
          <li>
            <h3>Cursos reconhecidos</h3>
            <p>Graduações com nota máxima no MEC.</p>
          </li>
          <li>
            <h3>Corpo docente qualificado</h3>
            <p>Professores mestres e doutores com experiência de mercado.</p>
          </li>
          <li>
            <h3>Bolsas de estudo</h3>
            <p>Programas de bolsa para todos os perfis.</p>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Inicio