describe('Home Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('renders the index component', () => {
    cy.get('#hello-world').should('exist')
  })
})
