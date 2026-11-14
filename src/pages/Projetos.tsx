import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

function Projetos() {
  return (
    <section className="container">
      <SectionTitle
        title="Projetos"
        subtitle="Projetos e atividades dos meus estudos, com o status real de cada um."
      />
      <div className="grid">
        {/* .map() cria um ProjectCard para cada projeto da lista */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projetos

