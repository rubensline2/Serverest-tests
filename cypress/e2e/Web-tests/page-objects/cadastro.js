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

    fillForm(formDataFixture){
        const randomFullName = faker.helpers.fake('{{name.firstName}} {{name.lastName}}')
        this.elements.getUserNome().type(randomFullName);
        
        const randomEmail = faker.internet.email(randomFullName);
        this.elements.getUserEmail().type(randomEmail);

        cy.fixture(formDataFixture).then((data) => {
          this.elements.getUserPassword().type(data.senha);
          this.elements.getBtnSubmit().click();
        });
        cy.contains('Cadastro realizado com sucesso')
    }
}
export const CadastroPage = new Cadastro();