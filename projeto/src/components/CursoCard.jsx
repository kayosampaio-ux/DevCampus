function CursoCard({ nome, duracao, descricao }) {
  return (
    <article className="curso-card">
      <h3>{nome}</h3>
      <p className="duracao">Duração: {duracao}</p>
      <p>{descricao}</p>
    </article>
  )
}

export default CursoCard