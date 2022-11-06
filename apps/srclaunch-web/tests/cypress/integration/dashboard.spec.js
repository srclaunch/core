import cy from 'cypress';

describe('BudgetBloom Login Screen', () => {
  const email = 'steven@budgetbloom.com';
  const password = 'Password23!';

  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.login({ username: 'steven@budgetbloom.com', password: 'Password23!' });
  });

  it('Shows Overview header text', () => {
    cy.contains('Overview');
  });
});
