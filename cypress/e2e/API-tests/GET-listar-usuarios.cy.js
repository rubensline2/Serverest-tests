/// <reference types= "cypress"/>

describe('Listar usuários', () => {

<<<<<<< HEAD
    it('GET - Listar todos os usuários', () => {

=======
    it.only('GET - Listar todos os usuários @api', () => {
>>>>>>> 7d7a61a65b95870ccdd0b00269efd3ef3e2330da
        cy.buscarTodosUsuarios()
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.quantidade).to.eq(response.body.usuarios.length)
        })
    })
<<<<<<< HEAD
    it('GET - Listar usuário pelo seu ID', () => {
        //const $user_id = '087lZtQ37Q9jiyCU'
=======
    it.only('GET - Listar usuário pelo seu ID @api', () => {
>>>>>>> 7d7a61a65b95870ccdd0b00269efd3ef3e2330da
        cy.buscarUsuarioPorID()
        .then((response)=> {
            expect(response.status).to.equal(200);
        })
    })
    
})