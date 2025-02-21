/// <reference types="cypress" />
import { CadastroPage } from "../page-objects/cadastro";

describe('Criar uma conta para usuário', { tags: ['@web'] }, () => {
    beforeEach(() => {
        CadastroPage.navigate();
    });
    it('Cadastrar Usuário para a aplicação', { tags: ['@web'] }, () => {
        CadastroPage.fillForm('billing-details-data');
    });   
});