/// <reference types= "cypress"/>

describe('Listar usuários', () => {

    it.only('GET - Listar todos os usuários @api', () => {
        cy.buscarTodosUsuarios()
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.quantidade).to.eq(response.body.usuarios.length)
        })
    })
    it.only('GET - Listar usuário pelo seu ID @api', () => {
        cy.buscarUsuarioPorID()
        .then((response)=> {
            expect(response.status).to.equal(200);
        })
    })
    
})