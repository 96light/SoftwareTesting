describe('Testing cypress', () => {
    beforeEach(() => {
        cy.visit('https://courses.uet.vnu.edu.vn/')
        cy.get('input#inputName.span2')
        .type('16020282')
        .should('have.value', '16020282')

        cy.get('input#inputPassword.span2')
        .type('chichbong')
        .should('have.value', 'chichbong')

        cy.get('button#submit').click()
      })

    it('Visit UET Website', () => {

        cy.get('a#label_3_14').click()
        cy.get('span.userbutton').click()

    })

    it('Visit profile', () => {
        cy.visit('https://courses.uet.vnu.edu.vn/user/profile.php?id=2529')

        cy.get('li.editprofile').click()
    })
})