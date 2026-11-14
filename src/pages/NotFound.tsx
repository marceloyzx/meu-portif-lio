import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="container hero">
      <p className="terminal-line">
        <span className="accent">$</span> erro 404
      </p>
      <h1>Página não encontrada</h1>
      <p className="hero-text">O endereço que você tentou acessar não existe.</p>
      <div className="buttons">
        <Link to="/" className="btn btn-primary">Voltar ao início</Link>
      </div>
    </section>
  )
}

export default NotFound

