// cypress/support/commands.js
import { faker } from '@faker-js/faker';

Cypress.Commands.add('cadastrarUsuario', () => { 
<<<<<<< HEAD
    const nomeAleatorio = faker.person.fullName();
    const emailAleatorio = faker.internet.email();
=======
    let nomeAleatorio = faker.person.fullName();
    let emailAleatorio = faker.internet.email();
>>>>>>> 7d7a61a65b95870ccdd0b00269efd3ef3e2330da
    const boolean = Array.from({ length: 5 }, () => Math.random() < 0.5);
    const adminAleatorio = boolean[Math.floor(Math.random() * boolean.length)].toString();
    cy.api({
        method: 'POST',
        url: '/usuarios',
        body: {
            "nome": nomeAleatorio,
            "email": emailAleatorio,
            "password": "1234678",
            "administrador": adminAleatorio
          },
    }).then((response) => { return response })
})

Cypress.Commands.add('cadastrarUsuarioInvalido', (nome, email, password, administrador) => { 
    cy.api({
        method: 'POST',
        url: '/usuarios',
        body: {
            "nome": nome,
            "email": email,
            "password": password,
            "administrador": administrador
          },
        failOnStatusCode: false
    }).then((response) => { return response })
})

Cypress.Commands.add('buscarTodosUsuarios', () => { 
    let _id
    cy.api({
        method: 'GET',
        url: `/usuarios/`,
        failOnStatusCode: false
      }).then(response =>{
        expect(response.status).to.eql(200)
        _id =  response.body.usuarios[0]._id
    }) 

Cypress.Commands.add('buscarUsuarioPorID', () => { 
       cy.api({
           method: 'GET',
           url: '/usuarios/' + _id,
           failOnStatusCode: false
        }).then((response) => { return response })
    })
})

Cypress.Commands.add('realizarLogin', () => { 
    cy.api({
        method: 'POST',
            url: '/login',
            body: {
                email: Cypress.env('username'),
                password: Cypress.env('password')
            },
      }).then((response) => { return response })
})
