describe('Luma home page spec', () => {
  it('I navigate to What\'s New page from home page', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('#ui-id-3').click()
    cy.get('.base').contains('What\'s New')
  })
  it('I click menu item', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.level-top.ui-corner-all').contains('Men').click()
  })
  it('I click first level sub-menu item', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.level-top.ui-corner-all').contains('Men').trigger('mouseover')
    cy.get('a[href="https://magento.softwaretestingboard.com/men/tops-men.html"]').click()
    cy.get('.base').contains('Tops')
  })
  it('I search for an item', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('#search').type('echo fit short{enter}')
    cy.get('.product-item-link').contains('Echo Fit Compression Short')
  })
})