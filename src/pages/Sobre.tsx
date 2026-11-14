import SectionTitle from '../components/SectionTitle'
import SkillTag from '../components/SkillTag'

// Lista de conhecimentos em estudo
const skills = [
  'HTML e CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Python',
  'MySQL',
  'Fundamentos de redes',
  'Cisco Packet Tracer',
  'Fundamentos de cibersegurança',
]

function Sobre() {
  return (
    <section className="container">
      <SectionTitle title="Sobre mim" />

      <div className="card">
        <p>
          Sou Marcelo Alves, estudante de Análise e Desenvolvimento de Sistemas na
          UNINASSAU Olinda, com formação técnica em Desenvolvimento de Sistemas pelo
          SENAI. Tenho interesse em tecnologia, desenvolvimento de software e
          cibersegurança. Atualmente, estou construindo minha base em programação,
          redes de computadores e segurança da informação.
        </p>
      </div>

      <div className="grid">
        <div className="card">
          <h3>Formação acadêmica</h3>
          <p>Análise e Desenvolvimento de Sistemas — UNINASSAU Olinda (cursando).</p>
        </div>
        <div className="card">
          <h3>Formação técnica</h3>
          <p>Técnico em Desenvolvimento de Sistemas — SENAI.</p>
        </div>
        <div className="card">
          <h3>Interesses profissionais</h3>
          <p>
            Ingressar no mercado de tecnologia, desenvolver experiência prática e
            aprofundar meus conhecimentos em infraestrutura, redes e cibersegurança,
            com interesse futuro em pentesting.
          </p>
        </div>
      </div>

      <h3 className="subheading">Conhecimentos e tecnologias em estudo</h3>
      <div className="tags">
        {skills.map((skill) => (
          <SkillTag key={skill} name={skill} />
        ))}
      </div>
    </section>
  )
}

export default Sobre

