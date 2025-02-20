/// <reference types= "cypress"/>

describe('Listar usuários', () => {

    it('GET - Listar todos os usuários', () => {

        cy.buscarTodosUsuarios()
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.quantidade).to.eq(response.body.usuarios.length)
        })
    })
    it('GET - Listar usuário pelo seu ID', () => {
        //const $user_id = '087lZtQ37Q9jiyCU'
        cy.buscarUsuarioPorID()
        .then((response)=> {
            expect(response.status).to.equal(200);
        })
    })
    
})