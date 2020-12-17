describe('Blog Card', () => {
  const titles = [
    'Web Components Introduction',
    'LitElement with TypeScript',
    'Navigation and Routing with Web Components',
  ];

  const author = 'Luis Aviles';

  beforeEach(() => {
    const baseUrl = 'http://localhost:8000/blog';
    cy.visit(baseUrl);
  });

  it('should display a title', () => {
    cy.get('lit-blog-posts')
      .shadow()
      .find('blog-card')
      .each((item, i) => {
        cy.wrap(item).shadow().find('h1').should('contain.text', titles[i]);
      });
  });

  it("should display the author's name", () => {
    cy.get('lit-blog-posts')
      .shadow()
      .find('blog-card')
      .each((item, i) => {
        cy.wrap(item).shadow().find('h2').should('contain.text', author);
      });
  });
});
