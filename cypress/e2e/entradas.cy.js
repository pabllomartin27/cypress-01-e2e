/// <reference types="cypress"/>
describe("Login", () => {

    const amount = "1"

    it("Nova Transação Positiva", () => {
        cy.visit("https://my-devfinances.netlify.app/#")
        cy.get('#transaction > .button').click()
        cy.get('#description').type("nova-transação-001")
        cy.get('#amount').type(amount)
        cy.get('#date').type("2025-05-26")
        cy.get('button').click()
        cy.get('.description').should("be.visible")
        cy.get('.income').should("have.text", "R$ " + amount + ",00")
    });

    it("Nova Transação Negativa", () => {
        cy.visit("https://my-devfinances.netlify.app/#")
        cy.get('#transaction > .button').click()
        cy.get('#description').type("nova-transação-001")
        cy.get('#amount').type("-" + amount)
        cy.get('#date').type("2025-05-26")
        cy.get('button').click()
        cy.get('.description').should("be.visible")
        cy.get('.expense').should("have.text", "-R$ " + amount + ",00")
    });

    it("", () => {});

    it("", () => {});
});