// Props: informações que o componente recebe de fora
interface SectionTitleProps {
  title: string
  subtitle?: string // o "?" indica que é opcional
}

// Título de seção reutilizado em várias páginas
function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="section-title">
      <h2>
        <span className="accent">#</span> {title}
      </h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

export default SectionTitle

