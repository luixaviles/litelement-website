
## LitElement Website

A Single Page Application(SPA) based on Web Components using LitElement, Vaadin Router for navigation and TypeScript.

## Quickstart

To get started, install dependencies:

```sh
npm install
```

Start the preview of the app:

```sh
npm run start
```

This will open your default browser with the App.

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Karma
- `lint` runs the linter for your project


## Running Cypress - E2E Testing

First, make sure you're running the application

```bash
npm run start
```

Then, open a separate terminal to run the E2E tests

```bash
npm run cypress:open
```

Or

```bash
npm run cypress:run
```
