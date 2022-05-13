// File used for custom Cypress commadns
import "cypress-wait-until";
Cypress.Commands.add("waitForElement", (element: string, status: string) => {
  cy.waitUntil(() => {
    return cy.get(`${element}`).should(`${status}`);
  });
});
