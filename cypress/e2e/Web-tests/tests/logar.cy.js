/// <reference types="cypress" />

import { HomePage } from '../page-objects/home';
import { LoginPage } from '../page-objects/login';

describe('Account details page tests', { tags: ['@Test'] }, () => {
  beforeEach(() => {
    LoginPage.navigate();
  });

  it('Logar na aplicação com credenciais válidas', { tags: ['@CX-T1536', '@smoke'] }, () => {
    LoginPage.Logar('rubens@test.com', '123456')
  });
  it('Logar na aplicação com credenciais Inválidas', { tags: ['@CX-T1537', '@smoke'] }, () => {
    LoginPage.InvalidoLogin('test@test.com', '36548')
  });
});
