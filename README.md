# Serverest-tests
# 🚀Cypress - API - Front-end - Serverest🚀
## Projeto de testes na API Serverest e frontend

* Modelagem da API REST com Swagger: https://serverest.dev/
* Url do frontend para teste: https://front.serverest.dev/

## ✨ Cenários de Testes automatizados
### Front-end
    ✓ Validar credencias do usuário validas
    ✓ Validar credencias do usuário Inválidas
    ✓ Validar cadastro de novo usuário

### Back-end 
     ✓ Retornar todos usuários cadastrados - Método GET
     ✓ Retornar único usuário pelo ID único - Método GET
     ✓ Cadastrar novo usuário - Método POST

## Clonando e executando em sua máquina
### Pré-requisitos:
- Instale o [Visual Studio Code]( https://code.visualstudio.com/download) ou qualquer outro editor:
- Instale o [Node.js](https://nodejs.org/en/download/);
- Baixe este repositório ou faça um git clone:
    - `- git clone git@github.com:rubensline2/Serverest-tests.git`
- Acessar o repositório baixado:
    - `cd Serverest-tests`
- Abra o diretório do projeto no terminal e execute o comando:
    - `npm install`

- Para abrir a interface de execução do Cypress testes API, execute:
    - `npm run test:api`

- Para abrir a interface de execução do Cypress testes Front-end, execute:
    - `npm run test:front`

- Para abrir a execução dos testes Front-end modo headless, execute:
    - `npm run headlesss:web`

- Para abrir a execução dos testes de API modo headless, execute:
    - `npm run headlesss:api`

### ⚙️ Arquitetura do projeto
-----------------------

```
cypress-api-test-serverest/
  ├─  cypress/
  │        │
  │        ├── e2e/
  │        │    ├── API-tests
  │        │    │       └── *.cy.js 
  │        │    │
  │        │    ├── Web-tests
  │        │    │    └── page-objects
  │        │    │            └── *.js
  │        │    │ 
  │        │    └── tests/ 
  │        │          └── *.cy.js
  │        │          
  │        ├── fixtures/
  │        │   ├── *.json
  │        │   ├── *.csv       
  │        │   └── *.png
  │        │
  │        │
  │        ├── screenshots/
  │        │   └── *.jpeg
  │        │
  │        ├── support/
  │        │   ├── databaseCommands.js
  │        │   ├── apiGeneralCommands.js
  │        │   ├── api<Categoria>Commands.js
  │        │   ├── api<Categoria2>Commands.js
  │        │   └── index.js
  │        │  
  │        └── videos/
  │ 
  ├── cypress.conf.js
  ├── node_modules/
  ├── cypress.json
  ├── package-lock.json
  ├── package.json
  └── README.md
```

---------------------------------------
## 🔍 Camadas da arquitetura

 - **fixtures:** arquivos para massa de dados estática para os testes (csv, png, xlsx, txt);
 - **plugins:** plugins que são utilizados na solução ficam dentro do arquivo "plugins/index.js";
 - **support:** camada com comandos Cypress customizados e sobrescritas globais:
    - Mapeamento das requisições (headers, requestservice, parametros [body, path, queryString]) para reuso em diferentes testes.
    - Arquivo para comandos de select/insert em banco de dados.
    - Arquivo index.js responsável de receber as importações dos comandos Cypress;
 - **environmentsConfig:** diretório com os arquivos de configuração por ambiente;
 - **node_modules:** arquivos ou diretórios que podem ser carregados pelo Node.js;
 - **cypress.json:** arquivo de configuração do Cypress;
 - **package-lock.json:** gerado automaticamente com as instalações e atualizações de pacotes;
