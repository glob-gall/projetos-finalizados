//load typedefinitions from cypress module
/// <reference types="cypress"/>

type ShowcaseAttributes = {
  name:string
  highlight?:boolean
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit google page
     * @example cy.google()
     */
    google(): Chainable<Window>

    /**
     * Custom command to get element by data-cy
     * @example cy.getByDataCy('selector')
     */
     getByDataCy(selector:string): Chainable<Window>

    /**
     * Custom command to check banner component
     * @example cy.shouldRenderBanner()
     */
     shouldRenderBanner(): Chainable<Element>

     /**
     * Custom command to check showcase component
     * @example cy.shouldRenderShowcase()
     */
      shouldRenderShowcase(attrs:ShowcaseAttributes): Chainable<Element>

      
  }
}
