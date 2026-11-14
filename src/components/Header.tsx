import { NavLink, Link } from 'react-router-dom'

// Cabeçalho com o menu de navegação (aparece em todas as páginas)
function Header() {
  // NavLink recebe "isActive" para destacar a página atual
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'nav-link active' : 'nav-link'

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <span className="logo-prompt">&gt;_</span> marcelo.alves
        </Link>
        <nav className="nav">
          <NavLink to="/" end className={linkClass}>Início</NavLink>
          <NavLink to="/projetos" className={linkClass}>Projetos</NavLink>
          <NavLink to="/sobre" className={linkClass}>Sobre</NavLink>
          <NavLink to="/contato" className={linkClass}>Contato</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header

