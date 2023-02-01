/// <reference path="../support/index.d.ts" />


describe('Home page', ()=>{
    it('should render home sections', ()=>{
        cy.visit('/')

        cy.shouldRenderBanner()
        cy.shouldRenderShowcase({name:'New games',highlight:false})
        cy.shouldRenderShowcase({name:'Popular games',highlight:true})
        cy.shouldRenderShowcase({name:'Upcoming games',highlight:true})
        cy.shouldRenderShowcase({name:'Free games',highlight:true})
    })
})