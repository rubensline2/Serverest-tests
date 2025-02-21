
export class Login {
  url = 'login';
  elements = {
    getUserInput: () => cy.get('#email'),
    getPasswordInput: () => cy.get('#password'),
    getLoginBtn: () => cy.get('[data-testid="entrar"]'),
    //getEditAccountForm: () => cy.get('form.edit-account')
  };

  navigate() {
    cy.visit(this.url);
  }

  setUsername(username) {
    this.elements.getUserInput().type(Cypress.env(username) || username);
  }

  setPassword(password) {
    this.elements.getPasswordInput().type(Cypress.env(password) || password);
  }

  clickLoginBtn() {
    this.elements.getLoginBtn().click();
  }
  msgSucesso() {

  }
  Logar(name, pass) {
    this.setUsername(name)
    this.setPassword(pass)
    this.clickLoginBtn()
    cy.contains('Serverest Store')
    cy.wait(2000)
  }
  
  InvalidoLogin(name, pass) {
    this.setUsername(name)
    this.setPassword(pass)
    this.clickLoginBtn()
    cy.contains('Email e/ou senha inválidos')
  }
}

export const LoginPage = new Login();
