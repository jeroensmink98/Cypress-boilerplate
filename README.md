# Cypress Boilerplate Repo

This repo can be used as starting point for your Cypress tests.

It contains a couple of folders

- `cypress/integration` This directory contains your actual test files
- `cypress/plugins` Here you can place extra pieces of code you want to use as an extention to your test files
- `cypress/support` In here you can create custom commands you want to run inside your tests like tasks that you have to repeat everytime for example logging in or navigating to a certain page before each test.

To open the Cypress dashboard from your favorite terminal run `yarn cy:open` to open the Cypress dashboard. Next you can pick a test file. The test files in this mode have hot-reloading enabled so everytime you make changes to the file Cypress will re-run your task.