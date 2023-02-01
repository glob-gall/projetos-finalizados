/// <reference path="../support/index.d.ts" />

describe.skip('cypress TS', () => {
  it('should visit google', () => {
    cy.google()
  })

  it("should add a default video",()=>{
      cy.visit("https://compiler-video-in-one-tab.vercel.app/")
      cy.findByRole('button').click()
  })
})
