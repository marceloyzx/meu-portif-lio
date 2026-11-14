// Define o formato (tipo) de cada projeto
export type ProjectStatus = 'Em desenvolvimento' | 'Em estudo' | 'Planejado'

export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  status: ProjectStatus
}

// Lista de projetos exibida na página /projetos
export const projects: Project[] = [
  {
    id: 1,
    title: 'OlindaGO',
    description:
      'Projeto colaborativo de tecnologia e valorização do patrimônio cultural de Olinda, desenvolvido no Programando o Futuro.',
    technologies: ['React', 'TypeScript'],
    status: 'Em desenvolvimento',
  },
  {
    id: 2,
    title: 'Portfólio Pessoal',
    description:
      'Projeto acadêmico desenvolvido com React e TypeScript para apresentar meus estudos e objetivos profissionais.',
    technologies: ['React', 'TypeScript', 'React Router', 'CSS'],
    status: 'Em desenvolvimento',
  },
  {
    id: 3,
    title: 'Estudos em Python',
    description:
      'Atividades de aprendizado de lógica de programação e fundamentos da linguagem Python.',
    technologies: ['Python'],
    status: 'Em estudo',
  },
  {
    id: 4,
    title: 'API com Python',
    description:
      'Projeto de prática planejado envolvendo requisições HTTP e integração com banco de dados MySQL.',
    technologies: ['Python', 'HTTP', 'MySQL'],
    status: 'Planejado',
  },
  {
    id: 5,
    title: 'Laboratório de Redes',
    description:
      'Estudos e simulações de redes de computadores utilizando o Cisco Packet Tracer.',
    technologies: ['Cisco Packet Tracer', 'Redes'],
    status: 'Em estudo',
  },
  {
    id: 6,
    title: 'Estudos em Cibersegurança',
    description:
      'Atividades de aprendizado sobre os fundamentos de segurança da informação.',
    technologies: ['Cibersegurança', 'Segurança da Informação'],
    status: 'Em estudo',
  },
]

