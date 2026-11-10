function Contato() {
  function enviar(evento) {
    evento.preventDefault()
    alert("Mensagem enviada! (formulário apenas visual)")
  }

  return (
    <main>
      <h1>Contato</h1>

      <section>
        <h2>Fale com a gente</h2>
        <p>Endereço: Av. Principal, 1000, Centro, Salvador - BA</p>
        <p>Telefone: (71) 0000-0000</p>
        <p>E-mail: contato@faculdadehorizonte.com.br</p>
      </section>

      <section>
        <h2>Envie uma mensagem</h2>
        <form onSubmit={enviar}>
          <label htmlFor="nome">Nome</label>
          <input id="nome" type="text" placeholder="Seu nome" required />

          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" placeholder="seu@email.com" required />

          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" rows="5" placeholder="Escreva sua mensagem" required />

          <button type="submit" className="botao">Enviar</button>
        </form>
      </section>
    </main>
  )
}

export default Contato