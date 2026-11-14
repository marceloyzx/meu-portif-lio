interface SkillTagProps {
  name: string
}

// Pequena etiqueta usada para tecnologias e conhecimentos
function SkillTag({ name }: SkillTagProps) {
  return <span className="skill-tag">{name}</span>
}

export default SkillTag

