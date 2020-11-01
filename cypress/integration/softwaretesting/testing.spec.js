describe('Testing in Skribbl', () => {
    it('Action', () => {
        cy.visit('https://chiasenhac.vn/')

        cy.contains('Đăng nhập').click()

        cy.get('input.email')
        .type('1234567890').should('have.value', '1234567890')

        .type('{selectall}{backspace}')
        .type('melody.minhthao@gmail.com').should('have.value', 'melody.minhthao@gmail.com')

        cy.get('input.pasword')
        .type('chichbong')

        cy.get('input#remember').check()
        cy.get('button.btn btn-outline-success my-2 my-sm-0 waves-effect waves-light').click()
    })
})