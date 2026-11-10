import CursoCard from "../components/CursoCard"

function Cursos() {
  return (
    <main>
      <h1>Cursos</h1>
      <p>Conheça nossas graduações.</p>

      <div className="cursos-lista">
        <CursoCard
          nome="Administração"
          duracao="4 anos"
          descricao="Formação em gestão de empresas, finanças e liderança."
        />
        <CursoCard
          nome="Análise e Desenvolvimento de Sistemas"
          duracao="2,5 anos"
          descricao="Programação, banco de dados e desenvolvimento web."
        />
        <CursoCard
          nome="Direito"
          duracao="5 anos"
          descricao="Formação jurídica com prática em escritório modelo."
        />
        <CursoCard
          nome="Enfermagem"
          duracao="4 anos"
          descricao="Cuidado em saúde com estágios em hospitais parceiros."
        />
        <CursoCard
          nome="Pedagogia"
          duracao="4 anos"
          descricao="Formação de professores para a educação básica."
        />
        <CursoCard
          nome="Engenharia Civil"
          duracao="5 anos"
          descricao="Projeto e construção de obras e infraestrutura."
        />
      </div>
    </main>
  )
}

export default Cursos