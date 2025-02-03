describe('Busca de produtos na Amazon', () => {
    it('Deve buscar um produto e exibir resultados', () => {
      cy.visit('https://www.amazon.com.br');
      cy.buscarProduto('BIC Caneta Esferográfica Escrita Fina Cristal Fina Azul');
      cy.get('[data-image-index="7"]').click(); // Seleciona o produto usando um seletor CSS
      cy.adicionarAoCarrinho();
  });
});