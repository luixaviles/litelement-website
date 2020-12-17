describe('About Page', () => {
  beforeEach(() => {
    const baseUrl = 'http://localhost:8000/about';
    cy.visit(baseUrl);
  });

  it("should show 'LitElement Website' as title", () => {
    cy.title().should('eq', 'LitElement Website');
  });

  it("should read 'About Me' inside custom element", () => {
    cy.get('lit-about').shadow().find('h2').should('contain.text', 'About Me');
  });

  it("should read 'About Me' inside custom element ", () => {
    cy.get('lit-about')
      .shadow()
      .find('h2')
      .should(e => {
        const [h2] = e.get();
        // Here we have the control of DOM conten from custom element
        console.log('h2!', h2, h2.textContent);
        expect(h2.textContent).to.contains('About Me');
      });
  });
});
