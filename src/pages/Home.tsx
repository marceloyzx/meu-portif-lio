import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="container hero">
      <p className="terminal-line">
        <span className="accent">$</span> whoami
      </p>
      <h1>
        Marcelo <span className="accent">Alves</span>
      </h1>
      <p className="hero-subtitle">Estudante de ADS | Tecnologia | Cibersegurança</p>
      <p className="hero-text">
        Estudante de Análise e Desenvolvimento de Sistemas na UNINASSAU Olinda, com
        formação técnica em Desenvolvimento de Sistemas pelo SENAI. Estou construindo
        minha base em programação, redes de computadores e segurança da informação.
      </p>
      <div className="buttons">
        <Link to="/projetos" className="btn btn-primary">Conhecer projetos</Link>
        <Link to="/sobre" className="btn btn-secondary">Sobre mim</Link>
      </div>
    </section>
  )
}

export default Home

