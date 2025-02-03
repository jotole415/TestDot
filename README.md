# TestDot1

Este projeto é um teste automatizado para adicionar produtos ao carrinho na Amazon e validar o subtotal. Ele utiliza o Cypress para realizar as interações e validações na interface do usuário.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (v16 ou superior)
- [NPM](https://www.npmjs.com/) (geralmente vem com o Node.js)
- [Cypress](https://www.cypress.io/) (instalado localmente no projeto)

## Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/jotole415/TestDot1.git

## Instale as dependências:

npm install

## Execute os testes:

npx cypress open

## Resultados dos Testes:

Os resultados dos testes serão exibidos no terminal ou na interface do Cypress.

Screenshots e vídeos dos testes serão salvos na pasta cypress/screenshots e cypress/videos, respectivamente, em caso de falhas.

## Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

Copy
TestDot1/
├── cypress/
│   ├── e2e/
│   │   └── fluxo_completo.cy.js  # Arquivo de teste principal
│   ├── fixtures/                 # Dados estáticos para testes
│   ├── screenshots/              # Screenshots capturados durante os testes
│   ├── videos/                   # Vídeos gravados durante os testes
│   └── support/                  # Comandos personalizados e configurações
├── node_modules/                 # Dependências do projeto (não versionada)
├── .gitignore                    # Arquivos e pastas ignorados pelo Git
├── README.md                     # Este arquivo
└── package.json                  # Dependências e scripts do projeto