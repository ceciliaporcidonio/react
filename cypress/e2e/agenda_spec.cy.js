describe('Testando a aplicação de agenda de contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
  });

  it('Deve adicionar um novo contato', () => {
    cy.get('input[placeholder="Nome"]', { timeout: 10000 }).should('be.visible').type('João');
    cy.get('input[placeholder="Email"]').should('be.visible').type('joao@example.com');
    cy.get('input[placeholder="Telefone"]').should('be.visible').type('123456789');
    cy.get('button[type="submit"]').should('be.visible').click();
    
    cy.contains('João', { timeout: 10000 }).should('be.visible');
  });

  it('Deve alterar um contato existente', () => {
    cy.contains('João', { timeout: 10000 }).parents('tr').within(() => {
      cy.get('button[aria-label="edit"]').should('be.visible').click();
    });

    cy.get('input[placeholder="Nome"]').clear().type('João Silva');
    cy.get('input[placeholder="Email"]').clear().type('joaosilva@example.com');
    cy.get('input[placeholder="Telefone"]').clear().type('987654321');
    cy.get('button[type="submit"]').click();
    
    cy.contains('João Silva', { timeout: 10000 }).should('be.visible');
  });

  it('Deve remover um contato', () => {
    cy.contains('João Silva', { timeout: 10000 }).parents('tr').within(() => {
      cy.get('button[aria-label="delete"]').should('be.visible').click();
    });
    
    cy.contains('João Silva', { timeout: 10000 }).should('not.exist');
  });
});
