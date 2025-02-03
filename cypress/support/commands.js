Cypress.Commands.add('buscarProduto', (termoBusca) => {
  cy.get('#twotabsearchtextbox').clear().type(termoBusca);
  cy.get('#nav-search-submit-button').click();
  cy.get('.s-main-slot').should('be.visible');
});

Cypress.Commands.add('selecionarProduto', (xpathProduto) => {
  cy.xpath(xpathProduto, { timeout: 15000 }).click();
  cy.get('#productTitle', { timeout: 15000 }).should('be.visible');
});

Cypress.Commands.add('adicionarAoCarrinho', () => {
  cy.get('#add-to-cart-button', { timeout: 15000 }).click();
});

Cypress.Commands.add('capturarPreco', (aliasName) => {
  cy.get('.a-price .a-offscreen', { timeout: 15000 })
    .invoke('text')
    .then((precoUnitarioTexto) => {
      const precoUnitario = parseFloat(precoUnitarioTexto.replace(/[^\d,]/g, '').replace(',', '.'));
      cy.wrap(precoUnitario).as(aliasName);
    });
});

