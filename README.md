# Cypress - API - Front-end - Serverest
## Projeto de testes na API Serverest e frontend

* Modelagem da API REST com Swagger: https://serverest.dev/
* Url do frontend para teste: https://front.serverest.dev/

## Cenários de Testes automatizados
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
- Visual Studio Code ou qualquer outro editor: https://code.visualstudio.com/download
- Node.js: https://nodejs.org/en/
- Git para versionamento: https://git-scm.com/downloads

Abrir terminal e rode os comandos:
```  
git clone git@github.com:rubensline2/Serverest-tests.git
```
#### Acessar o repositório baixado:
```
cd Serverest-tests
```
#### No terminal instalar as dependencias:
```
npm install 
```
#### Para executar os testes de API execute no terminal:
```
npm run test:api
```
#### Para executar os testes front execute no terminal:
```
npm run test:front
```
#### Para executar em moodo Headlesss, via console
```
npx cypress run
```