describe('svg-layout', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mycomponentcomponent--primary'));
  it('should render the component', () => {
    cy.get('workspace-my-component').should('exist');
  });
});