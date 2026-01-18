# Cypress Academia QA Accenture 2026

This repository was created to store the Cypress E2E automation challenge from Accenture QA Academy 2026.

## Requirements

Before running the tests, make sure you have installed:

- Node.js
- npm
- Git
- IDE (recommended: Visual Studio Code)

If you don't have the dependencies installed checkout the [Installing Dependencies](#installing-dependencies) section.

## Getting Started

First, clone the repository to your local machine:

```bash
git clone https://github.com/suellyngomes/CypressAcademiaQAAccenture2026.git
cd CypressAcademiaQAAccenture2026
```

Then, install the project dependencies:

```bash
npm install
```

## How to Run the Tests

Run tests with browser UI:

```bash
npx cypress open
```
You should see something like:
<img width="1186" height="793" alt="image" src="https://github.com/user-attachments/assets/2e2d989b-1555-43bb-9d6f-d184dbd31f66" />

Select `E2E Testing`
<img width="1186" height="793" alt="image" src="https://github.com/user-attachments/assets/3d570c0b-7e78-40c6-b68e-ce5569435242" />

Select your browser and click `Start E2E Testing in <your browser>`

You should see something like:
<img width="1920" height="1078" alt="image" src="https://github.com/user-attachments/assets/80993ec1-4630-4080-be2c-8be10bc1d0ae" />

## View Reports
 Running the tests in headed mode using the browser UI allows you to see the execution in real-time.
<img width="1920" height="1078" alt="image" src="https://github.com/user-attachments/assets/e44f3cd9-b684-4381-94df-f25038c71581" />

## Test Structure

Tests are organized using BDD with Cucumber and follow the Page Object Model pattern:

- **Feature Files** (`cypress/e2e/`): Gherkin feature files containing test scenarios
  - `coffee_purchase.feature`: Main test scenario for coffee cart checkout flow

- **Step Definitions** (`cypress/support/step_definitions/`): Implementation of Gherkin steps
  - `accessCoffeeCart.cy.js`: Steps for accessing the coffee cart
  - `selectCoffees.cy.js`: Steps for selecting coffees and handling promotions
  - `buyCoffees.cy.js`: Steps for cart validation and checkout process

- **Page Objects** (`cypress/support/pages/`): Page Objects
  - `coffeeCatalog.page.js`: Page object for the coffee catalog page
  - `coffeeCart.page.js`: Page object for the shopping cart page

- **Fixtures** (`cypress/fixtures/`): Test data files
  - `coffees.json`: Coffee names and prices used in tests

## Configuration

The test configuration is set in `cypress.config.js`:

- **Base URL**: `https://coffee-cart.app`
- **Spec Pattern**: `cypress/e2e/**/*.feature`

Environment variables are configured in `cypress.env.json`:
- Customer name and email for checkout

## Installing Dependencies

This project uses Cypress with Node.js and npm. It requires Node.js, and Git to be installed on Windows.

### Install Node.js

Cypress requires Node.js version 14.x or higher.

Follow the steps below to install Node.js using the official Node.js website.

#### 1. Download Node.js

Go to the official Node.js website:
https://nodejs.org/

Select the LTS version.

Download the installer:
- Windows: `.msi` installer

#### 2. Install Node.js

Run the downloaded installer.
Follow the installation steps using the default options.
Make sure the option "Add to PATH" is selected during installation.
Finish the installation.

#### 3. Verify the Installation

After the installation, open a terminal or command prompt and run:

```bash
node --version
```

You should see something like:

```
v24.12.0
```

Also verify npm is installed:

```bash
npm --version
```

You should see something like:

```
11.6.2
```

### Install Git on Windows

Cypress requires Git to clone repositories and manage source code.

Follow the steps below to install Git on Windows using the official Git website.

#### 1. Download Git

Go to the official Git website:
https://git-scm.com/downloads

Click on **Windows**.

The installer will start downloading automatically (`.exe` file).

#### 2. Install Git

Run the downloaded installer.
Click **Next** through the installation steps.
Keep the default options unless you have specific preferences.
Make sure the option **"Git from the command line and also from 3rd-party software"** is selected.
Finish the installation.

#### 3. Verify the Installation

After the installation, open a terminal or command prompt and run:

```bash
git --version
```

You should see something like:

```
git version 2.52.0.windows.1
```

## Project Dependencies

After installing Node.js and Git, install the project dependencies:

```bash
npm install
```

This will install:
- **Cypress**: E2E testing framework
- **cypress-cucumber-preprocessor**: Plugin for running Cucumber/Gherkin feature files with Cypress
