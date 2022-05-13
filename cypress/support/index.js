import "./commands.ts";


// Don't stop the test when applicaiton throws an exception.
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});