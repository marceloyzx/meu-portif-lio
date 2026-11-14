# Portfólio Pessoal — Marcelo Alves

Portfólio pessoal desenvolvido como atividade acadêmica com **React** e **TypeScript**. Apresenta meus estudos, projetos e objetivos na área de Tecnologia da Informação, com foco em desenvolvimento de software e cibersegurança.

## Tecnologias

- HTML5 e CSS3 (CSS tradicional, sem frameworks)
- JavaScript e TypeScript
- React
- React Router DOM
- Vite

## Como executar

Requisito: [Node.js](https://nodejs.org/) instalado.

```bash
npm install     # instala as dependências
npm run dev     # inicia o servidor de desenvolvimento
```

Outros comandos:

```bash
npm run build    # verifica os tipos e gera a versão de produção
npm run preview  # visualiza a versão de produção
```

## Páginas

| Rota        | Página                   |
| ----------- | ------------------------ |
| `/`         | Início                   |
| `/projetos` | Projetos                 |
| `/sobre`    | Sobre                    |
| `/contato`  | Contato                  |
| `*`         | Página não encontrada (404) |

## Estrutura do projeto

```text
src/
├── components/      # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx   # recebe os dados do projeto via Props
│   ├── SectionTitle.tsx
│   └── SkillTag.tsx
├── pages/           # Uma página por rota
│   ├── Home.tsx
│   ├── Projetos.tsx
│   ├── Sobre.tsx
│   ├── Contato.tsx
│   └── NotFound.tsx
├── data/
│   └── projects.ts  # Lista de projetos (array de objetos)
├── App.tsx          # Rotas
├── App.css          # Estilos dos componentes e páginas
├── index.css        # Estilos globais e cores
└── main.tsx         # Ponto de entrada
```

## Como personalizar

- **Projetos:** edite a lista em `src/data/projects.ts`.
- **Contato:** substitua os links de exemplo em `src/pages/Contato.tsx` pelos seus dados reais (GitHub, LinkedIn e e-mail).
- **Cores:** altere as variáveis no início de `src/index.css`.

## Autor

Marcelo Alves — Estudante de Análise e Desenvolvimento de Sistemas (UNINASSAU Olinda).

