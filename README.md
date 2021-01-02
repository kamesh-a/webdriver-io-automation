# Web automation assignment ( Docker + Selenium Grid + Cucumber + Javascript + WebdriverIO )

#### Requirements

- [x] Setup the solution with its Dockerized image - `Docker compose with selenium-hub, selenium-node/chrome, selenium-node/firefox`
- [x] Parallel execution of tests - `Chrome:3 instances, Firefox:1 instance`
- [x] Reporting of the results - `Allure and Multiple cucumber Json reporter`
- [x] Documentation

### Addtional ( Bonus )

- [ ] Kubernetes deploying - **Work in Progress**
- [x] Making use of `wdio-image-comparison-service`

#### Features

- Test will run, parallely based on node instances aavailable with `selenium-hub` `chrome/firefox` **nodes**
- BDD testing with `Cucumber`
- Reporting with `Allure`
- Reporting with `multiple-cucumber-json-reporter`
- Given, Scenario, Step definitions and helper files written in `typescript`
- Docker compose is used to start the `selenium-hub`

#### Version pre-requisite

- Need **node-js** and **java** `(allure-reporter)`
  - `Node.js` - 10 or higher
  - `Java` - 8 or higher

#### Starting application testing

1. Install **Node dependencies**:

```sh
npm install
```

2. Install **docker** and run `selenium:hub`:

```sh
npm run selenium
```

3. Running tests:

```sh
npm run test
```

To stop docker containers:

```sh
npm run selenium:stop
```

#### Gherking syntax Features Under test and grouping.

- `volvo.campaign.modal.feature` - Tests related to modal dialog ex: cookie policy
- `volvo.campaign.nav.feature` - Tests related to navigable elements in application ex: hamburger menu options `Buy`, `Own` etc.
- `volvo.campaign.screenshot.feature`- Creates and image comparison test.

#### Report generation

1. Allure report is automatically generated to open the reports

```sh
npm run report:allure
```

2. Multiple cucumber json reporter will open automatically, but to open manually.

```sh
npm run report
```

#### Parallel Testing

- WebdriverIO can run parallel test/features in case of multiple nodes availability with selenium hub.
  so We have configured `chrome=3` and `firefox=1` instance/node.
- When run `docker-compose up -d --scale chrome=3` or `npm run selenium`, we are spinnign three chrome instaces.
- Webdriver IO will run all test in parallel in chrome
- Webdriver IO will run sequentially in Firefox because of single instance.
- We can use **kubernetes to provision the nodes** in selenium-hub based on demand ( Work in Progess)
