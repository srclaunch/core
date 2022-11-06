import cy from 'cypress';

describe('BudgetBloom Login Screen', () => {
  const email = 'steven@budgetbloom.com';
  const password = 'Password23!';

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Shows Login header text', () => {
    cy.contains('Login');
  });

  it('Handles React controlled input value changes correctly', () => {
    cy.get('[data-testid="username-input"').type(email).should('have.value', email);

    cy.get('[data-testid="password-input"').type(password).should('have.value', password);
  });

  it('Should try to login', () => {
    cy.get('[data-testid="username-input"').type(email).should('have.value', email);

    cy.get('[data-testid="password-input"').type(password).should('have.value', password);

    cy.get('[data-testid="login-button"]').click();
  });
});
