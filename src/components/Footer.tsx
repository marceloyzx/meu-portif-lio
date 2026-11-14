// Rodapé simples exibido em todas as páginas
function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>
          <span className="accent">$</span> Marcelo Alves © {year} — Feito com React e TypeScript
        </p>
      </div>
    </footer>
  )
}

export default Footer

