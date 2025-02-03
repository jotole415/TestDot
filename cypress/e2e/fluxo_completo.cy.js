describe('Fluxo completo de busca, adição e validação do carrinho na Amazon', () => {
  it('Deve adicionar 4 produtos ao carrinho e validar se todos estão corretos', () => {
    // Visita a página inicial da Amazon
    cy.visit('https://www.amazon.com.br');

    // Adiciona os produtos
    cy.buscarProduto('BIC Caneta Esferográfica Escrita Fina Cristal Fina Azul');
    cy.get('[data-image-index="7"]').click(); // Seleciona o produto usando um seletor CSS
    cy.capturarPreco('precoCaneta');
    cy.adicionarAoCarrinho();

    cy.buscarProduto('Harry Potter e a Pedra Filosofal');
    cy.get('img[alt="Harry Potter e a Pedra Filosofal - Edição Ilustrada: 1"]').click(); // Seleciona o produto usando um seletor CSS
    cy.capturarPreco('precoLivro');
    cy.adicionarAoCarrinho();

    cy.buscarProduto('Copo Stanley Branco');
    cy.get('[data-image-index="5"]').click(); // Seleciona o produto usando um seletor CSS
    cy.capturarPreco('precoCopo');
    cy.adicionarAoCarrinho();

    cy.buscarProduto('Ferrari Black Masculino Eau De Toilette - 125ml');
    cy.get('[data-image-index="7"]').click(); // Seleciona o produto usando um seletor CSS
    cy.capturarPreco('precoPerfume');
    cy.adicionarAoCarrinho();

    // Acessa o carrinho
    cy.get('#sw-gtc').should('be.visible').click(); // Usa o ID do botão e aguarda ele estar visível

    // Aguarda o carrinho ser carregado
    cy.get('#sc-active-cart').should('be.visible'); // Aguarda o carrinho estar visível

    // Captura o subtotal
    cy.get('#sc-subtotal-amount-activecart .a-size-medium').invoke('text').then((subtotalTexto) => {
      const subtotal = parseFloat(subtotalTexto.replace(/[^0-9,]/g, '').replace(',', '.'));

      // Captura os preços dos produtos no carrinho
      let somaPrecos = 0;
      cy.get('#sc-active-cart .sc-list-item').each(($item) => {
        cy.wrap($item).within(() => {
          // Captura o preço do produto
          cy.get('.a-price .a-offscreen').invoke('text').then((precoTexto) => {
            const preco = parseFloat(precoTexto.replace(/[^0-9,]/g, '').replace(',', '.'));
            somaPrecos += preco; // Soma os preços
          });
        });
      }).then(() => {
        // Compara a soma dos preços com o subtotal
        expect(somaPrecos).to.be.closeTo(subtotal, 5);
      });
    });
  });
});