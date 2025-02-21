import { faker } from '@faker-js/faker';
export class Cadastro {
    url = 'cadastrarusuarios';
    elements = {
        getUserNome: () => cy.get('#nome'),
        getUserEmail: () => cy.get('#email'),
        getUserPassword: () => cy.get('#password'),
        getBtnSubmit: () => cy.get('[data-testid="cadastrar"]')
    }
    navigate() {
        cy.visit(this.url);
    }

<<<<<<< HEAD
    fillBillingForm(formDataFixture){
        const randomFullName = faker.helpers.fake('{{name.firstName}} {{name.lastName}}')
        this.elements.getUserNome().type(randomFullName);
        
        const randomEmail = faker.internet.email(randomFullName);
=======
    fillForm(formDataFixture){
        let randomFullName = faker.helpers.fake('{{name.firstName}} {{name.lastName}}')
        this.elements.getUserNome().type(randomFullName);
        
        let randomEmail = faker.internet.email(randomFullName);
>>>>>>> 7d7a61a65b95870ccdd0b00269efd3ef3e2330da
        this.elements.getUserEmail().type(randomEmail);

        cy.fixture(formDataFixture).then((data) => {
          this.elements.getUserPassword().type(data.senha);
          this.elements.getBtnSubmit().click();
        });
        cy.contains('Cadastro realizado com sucesso')
    }
<<<<<<< HEAD









    /*setUsername(username) {
        this.elements.getUserNome().type(Cypress.env(username) || username);
    }

    setUsermail(usermail) {
        this.elements.getUserEmail().type(Cypress.env(useremail) || usermail);
    }

    getBtnSubmit() {
        this.elements.getLoginBtn().click();
    }*/
=======
>>>>>>> 7d7a61a65b95870ccdd0b00269efd3ef3e2330da
}
export const CadastroPage = new Cadastro();