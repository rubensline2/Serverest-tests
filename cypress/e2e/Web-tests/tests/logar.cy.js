/// <reference types="cypress" />

import { HomePage } from '../page-objects/home';
import { LoginPage } from '../page-objects/login';

<<<<<<< HEAD
describe('Account details page tests', { tags: ['@Test'] }, () => {
=======
describe('Account details page tests', { tags: ['@web'] }, () => {
>>>>>>> 7d7a61a65b95870ccdd0b00269efd3ef3e2330da
  beforeEach(() => {
    LoginPage.navigate();
  });

<<<<<<< HEAD
  it('Logar na aplicação com credenciais válidas', { tags: ['@CX-T1536', '@smoke'] }, () => {
    LoginPage.Logar('rubens@test.com', '123456')
  });
  it('Logar na aplicação com credenciais Inválidas', { tags: ['@CX-T1537', '@smoke'] }, () => {
=======
  it('Logar na aplicação com credenciais válidas', { tags: ['@web', '@smoke'] }, () => {
    LoginPage.Logar('rubens@test.com', '123456')
  });
  it('Logar na aplicação com credenciais Inválidas', { tags: ['@web', '@smoke'] }, () => {
>>>>>>> 7d7a61a65b95870ccdd0b00269efd3ef3e2330da
    LoginPage.InvalidoLogin('test@test.com', '36548')
  });
});
