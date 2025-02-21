/// <reference types="cypress" />
import { CadastroPage } from "../page-objects/cadastro";

<<<<<<< HEAD
describe('Criar uma conta para usuário', { tags: ['@Cadastro'] }, () => {
    beforeEach(() => {
        CadastroPage.navigate();
    });
    it('Cadastrar Usuário para a aplicação', { tags: ['@CX-T1537', '@regression'] }, () => {
        CadastroPage.fillBillingForm('billing-details-data');
=======
describe('Criar uma conta para usuário', { tags: ['@web'] }, () => {
    beforeEach(() => {
        CadastroPage.navigate();
    });
    it('Cadastrar Usuário para a aplicação', { tags: ['@web'] }, () => {
        CadastroPage.fillForm('billing-details-data');
>>>>>>> 7d7a61a65b95870ccdd0b00269efd3ef3e2330da
    });   
});