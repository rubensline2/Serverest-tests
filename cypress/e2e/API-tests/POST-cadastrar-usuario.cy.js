/// <reference types= "cypress"/>

import { faker } from '@faker-js/faker';

const nomeAleatorio = faker.person.fullName()
const emailAleatorio = faker.internet.email()
const passwordAleatorio = faker.internet.password()
const boolean = Array.from({ length: 5 }, () => Math.random() < 0.5)
const adminAleatorio = boolean[Math.floor(Math.random() * boolean.length)].toString()

describe('Cadastro de usuário', () => {
    it.only('POST - Cadastrar usuário com sucesso @api', () => {
        cy.cadastrarUsuario()
        .then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal("Cadastro realizado com sucesso");
            expect(response.body._id).to.exist;
        })
    });
})