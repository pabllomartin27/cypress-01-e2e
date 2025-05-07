/// <reference types="cypress"/>
describe("Login", () => {

    it("Login com sucesso", () => {
        cy.visit("https://automationpratice.com.br/login")
        cy.get('#user').type('edu@qazando.com')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('.swal2-title').should("be.visible")
        cy.get('.swal2-title').should("have.text", 'Login realizado')
    });

    it("", () => {});

    it("", () => {});

    it("", () => {});
});