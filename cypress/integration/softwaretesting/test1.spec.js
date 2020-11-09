describe('Testing cypress', () => {
    it('Normal Login',() => {
        cy.visit('https://uetcodehub.pro')
        cy.get('input#inputName.span2')

        .type('1234567890').should('have.value', '1234567890')

        .type('{selectall}{backspace}')

        .type('16020282')
        .should('have.value', '16020282')

        cy.get('input#inputPassword.span2')
        .type('chichbong')
        .should('have.value', 'chichbong')

        cy.get('button#submit').click()
        cy.get('span.usertext').should('be.visible')
      })

      it('Abnormal Login 1',() => {
        cy.visit('https://uetcodehub.pro')
        cy.get('input#inputName.span2')
        .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
        .type('{meta}{command}{cmd}')
        .type('1234567890').should('have.value', '1234567890')

        cy.get('input#inputPassword.span2')
        .type('chichbong')
        .should('have.value', 'chichbong')

        cy.get('button#submit').click()

        cy.get('span.error').should('be.visible')
      })

      it('Abnormal Login 2',() => {
        cy.visit('https://uetcodehub.pro')

        cy.get('button#submit').click()

        cy.get('span.error').should('be.visible')
      })

      it('Abnormal Login 3',() => {
        cy.visit('https://uetcodehub.pro')
        cy.get('input#inputName.span2')
        .type('16020282').should('have.value', '16020282')

        cy.get('input#inputPassword.span2')
        .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
        .type('{meta}{command}{cmd}')
        .type('12345678')
        .should('have.value', '12345678')

        cy.get('button#submit').click()

        cy.get('span.error').should('be.visible')
      })
})