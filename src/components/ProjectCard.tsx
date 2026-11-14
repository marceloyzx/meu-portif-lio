import type { Project } from '../data/projects'
import SkillTag from './SkillTag'

// O ProjectCard recebe os dados do projeto por Props
interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  // Transforma "Em desenvolvimento" em "em-desenvolvimento" para usar como classe CSS
  const statusClass = project.status.toLowerCase().replace(' ', '-')

  return (
    <article className="card project-card">
      <div className="project-card-top">
        <h3>{project.title}</h3>
        <span className={`status status-${statusClass}`}>{project.status}</span>
      </div>
      <p>{project.description}</p>
      <div className="tags">
        {project.technologies.map((tech) => (
          <SkillTag key={tech} name={tech} />
        ))}
      </div>
    </article>
  )
}

export default ProjectCard

