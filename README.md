
  # Biblioteca GP5

  Aplicacao web para gerenciamento de uma biblioteca digital. A plataforma permite encontrar livros, consultar detalhes, realizar emprestimos e ler arquivos EPUB diretamente no navegador. Usuarios administradores possuem ferramentas para manter o acervo, as categorias, os emprestimos e os usuarios.

  ## Funcionalidades

  ### Para usuarios

  - Cadastro em duas etapas e login.
  - Busca de livros por titulo e por categoria.
  - Visualizacao de detalhes, autores, descricao e categorias do livro.
  - Realizacao e devolucao de emprestimos.
  - Acompanhamento de emprestimos ativos e historico.
  - Inicio e continuidade da leitura de livros EPUB.
  - Salvamento do progresso de leitura.
  - Edicao de dados pessoais e alteracao de senha.

  ### Para administradores

  - Painel com indicadores de livros, categorias, usuarios e emprestimos ativos.
  - Consulta dos emprestimos recentes e dos livros adicionados recentemente.
  - Busca e gerenciamento de livros do acervo.
  - Edicao de titulo, autores e descricao dos livros.
  - Gerenciamento de categorias associadas aos livros.
  - Cadastro, edicao e consulta de categorias.
  - Importacao de livros a partir do Gutendex.
  - Consulta da lista de usuarios.

  ## Tecnologias

  - React 19 e TypeScript
  - Vite
  - React Router
  - TanStack React Query
  - Axios
  - Radix UI
  - Framer Motion
  - Keen Slider
  - EPUB.js e React Reader
  - Lucide React
  - Sonner e SweetAlert2

  ## Pre-requisitos

  - Node.js 20 ou superior
  - npm
  - Uma API backend compativel com os endpoints consumidos pela aplicacao

  ## Instalacao

  Clone o repositorio e instale as dependencias:

  ```bash
  git clone <url-do-repositorio>
  cd biblioteca-gp5
  npm install
  ```

  Crie um arquivo `.env` na raiz do projeto:

  ```env
  VITE_API_URL=http://localhost:8080
  ```

  O valor de `VITE_API_URL` deve apontar para a URL da API backend. A aplicacao envia o token de autenticacao nas requisicoes protegidas usando o header `Authorization: Bearer <token>`.

  ## Scripts

  ```bash
  # Inicia o servidor de desenvolvimento
  npm run dev

  # Verifica tipos e gera a versao de producao
  npm run build

  # Executa o ESLint
  npm run lint

  # Visualiza localmente a build de producao
  npm run preview
  ```

  ## Rotas principais

  | Rota | Descricao |
  | --- | --- |
  | `/` | Inicio do usuario |
  | `/search/books` | Busca de livros |
  | `/book/:id` | Detalhes de um livro |
  | `/loan` | Emprestimos do usuario |
  | `/reading/:idBook` | Leitor EPUB |
  | `/auth/login` | Login |
  | `/auth/register` | Primeira etapa do cadastro |
  | `/auth/register/password` | Definicao da senha |
  | `/admin/home` | Painel administrativo |
  | `/admin/imports` | Importacao de livros |
  | `/admin/search/books` | Gerenciamento do acervo |
  | `/admin/list/users` | Lista de usuarios |
  | `/categories` | Gerenciamento de categorias |

  As rotas administrativas e de usuario autenticado sao protegidas por verificacao do token armazenado no navegador.

  ## Estrutura do projeto

  ```text
  src/
  ├── feature/       # Funcionalidades organizadas por dominio
  ├── layout/        # Layouts de autenticacao, aplicacao e leitor
  ├── routes/        # Configuracao das rotas
  ├── services/      # Cliente HTTP e integracoes
  ├── shared/        # Componentes reutilizaveis
  ├── styles/        # Estilos globais
  └── utils/         # Funcoes auxiliares
  ```

  Os dominios principais em `src/feature` sao autenticacao, livros, categorias, emprestimos, leitura, inicio e usuarios.

  ## Deploy na Vercel

  O projeto possui `vercel.json` com rewrite para `index.html`, permitindo que as rotas do React Router funcionem em uma SPA.

  Na Vercel:

  1. Importe o repositorio.
  2. Use `npm run build` como comando de build.
  3. Use `dist` como diretorio de saida.
  4. Configure a variavel de ambiente `VITE_API_URL` com a URL da API em producao.

  ## Observacoes

  - Este repositorio contem o frontend da Biblioteca GP5; o backend e a persistencia dos dados sao fornecidos separadamente.
  - Os livros importados dependem da integracao com o Gutendex e da API backend configurada.
  - Nao adicione arquivos `.env` ao repositorio. Use `.env.example` para documentar valores necessarios sem expor configuracoes privadas.
