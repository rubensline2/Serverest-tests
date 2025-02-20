/// <reference types="cypress" />
import { CadastroPage } from "../page-objects/cadastro";

describe('Criar uma conta para usuário', { tags: ['@Cadastro'] }, () => {
    beforeEach(() => {
        CadastroPage.navigate();
    });
    it('Cadastrar Usuário para a aplicação', { tags: ['@CX-T1537', '@regression'] }, () => {
        CadastroPage.fillBillingForm('billing-details-data');
    });   
});