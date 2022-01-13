/// <reference types="cypress" />

context('Page login', () => {
  it('should be able to login to the page login', () => {
    cy.visit('/');
    cy.get('input[data-cy=email]').type('teste@gmail.com').should('have.value', 'teste@gmail.com');
    cy.get('input[data-cy=senha]').type('123456').should('have.value', '123456');
    cy.screenshot('login correct', { capture: 'runner' });
    cy.get('button[type=submit]').wait(1000).click();
  });

  it('should be able not to login to the page login with email incorrect ', () => {
    cy.visit('/');
    cy.get('input[data-cy=email]').type('teste.com').should('have.value', 'teste.com');
    cy.get('input[data-cy=senha]').type('123456').should('have.value', '123456');
    cy.screenshot('email incorrect', { capture: 'runner' });
    cy.get('button[type=submit]').wait(1000).click();
  });
});
