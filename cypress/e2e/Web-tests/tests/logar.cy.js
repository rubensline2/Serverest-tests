/// <reference types="cypress" />

import { HomePage } from '../page-objects/home';
import { LoginPage } from '../page-objects/login';

describe('Account details page tests', { tags: ['@web'] }, () => {
  beforeEach(() => {
    LoginPage.navigate();
  });

  it('Logar na aplicação com credenciais válidas', { tags: ['@web', '@smoke'] }, () => {
    LoginPage.Logar('rubens@test.com', '123456')
  });
  it('Logar na aplicação com credenciais Inválidas', { tags: ['@web', '@smoke'] }, () => {
    LoginPage.InvalidoLogin('test@test.com', '36548')
  });
});
