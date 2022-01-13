context('Page form', () => {
  it('should be able to register new user in the form page', () => {
    cy.visit('/formulario');
    cy.get('input[data-cy=email]').type('teste@gmail.com').should('have.value', 'teste@gmail.com');
    cy.get('input[data-cy=senha]').type('123456').should('have.value', '123456');
    cy.get('button[type=submit]').wait(1000).click();

    cy.get('input[data-cy=nome]').type('Francisco Júnior').should('have.value', 'Francisco Júnior');
    cy.get('input[data-cy=cpf').type('670.122.580-20').should('have.value', '670.122.580-20');
    cy.get('input[data-cy=email').type('teste@gmail.com').should('have.value', 'teste@gmail.com');
    cy.get('input[data-cy=cep').type('64.308-000').should('have.value', '64.308-000');
    cy.get('input[data-cy=rua').type('Projetada').should('have.value', 'Projetada');
    cy.get('input[data-cy=numero').type('10').should('have.value', '10');
    cy.get('input[data-cy=bairro').type('Cedro').should('have.value', 'Cedro');
    cy.get('input[data-cy=cidade').type('Lagoa do Sítio').should('have.value', 'Lagoa do Sítio');

    cy.screenshot('form', { capture: 'runner' });

    cy.get('button[type=submit]').wait(1000).click();
  });
});
