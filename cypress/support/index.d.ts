declare namespace Cypress {
  interface Chainable<Subject> {
    waitForElement(element: string, status: string): void;
  }
}
