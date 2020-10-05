describe('Blog Posts Page', () => {
  beforeEach(() => {
    const baseUrl = 'http://localhost:8000/blog';
    cy.visit(baseUrl);
  });

  it("should read 'Blog Posts' as title", () => {
    cy.get('lit-blog-posts')
      .shadow()
      .find('h2')
      .should('contain.text', 'Blog Posts');
  });

  it('should display a list of blog cards', () => {
    cy.get('lit-blog-posts')
      .shadow()
      .find('blog-card')
      .its('length')
      .should('be.gt', 0);
  });
});
