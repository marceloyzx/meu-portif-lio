import SectionTitle from '../components/SectionTitle'

// TODO: substitua os links de exemplo pelos seus dados reais
const contacts = [
  { id: 1, name: 'GitHub', value: 'github.com/seu-usuario (exemplo)', link: 'https://github.com/seu-usuario' },
  { id: 2, name: 'LinkedIn', value: 'linkedin.com/in/seu-perfil (exemplo)', link: 'https://www.linkedin.com/in/seu-perfil' },
  { id: 3, name: 'E-mail', value: 'seu-email@exemplo.com (exemplo)', link: 'mailto:seu-email@exemplo.com' },
]

function Contato() {
  return (
    <section className="container">
      <SectionTitle
        title="Contato"
        subtitle="Os links abaixo são exemplos e devem ser substituídos pelos meus dados reais."
      />
      <div className="grid">
        {contacts.map((contact) => (
          <a key={contact.id} href={contact.link} className="card contact-card" target="_blank" rel="noreferrer">
            <h3>{contact.name}</h3>
            <p>{contact.value}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contato

