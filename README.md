
# [New Tab Extension](https://github.com/shpiglify/new-tab-chrome-extension) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) 



New Tab is a chrome extension that change and control some of the browser's default settings and behaviours. 

#### Main features:
* **Control on new-tab html page:** New tab html contains a simple text input, which acts as a search box:
user's typing will generate a list of auto suggest keywords (using the *Auto-suggest API*), user's submit will redirect the page into search results page (using the *Search redirect API*).
* **Taking over the default search settings:** The app takes over the default search engine, and the auto-suggest in the browser.
* **Search history widget:** The app search for your last websites in chrome's surfing history, and displays them as links to the user.
* **Modular component based structure, easy to scale:** Because the app is written using *[react framework](https://github.com/facebook/create-react-app)*, its components are fully modular, and easy to reuse.


## Getting started

1. after cloning or downloading the project directory run **`npm install`**

2. make sure you are in the project root directory and run: **`npm run build`**

3. Go to [chrome://extensions/](chrome://extensions/).
4. At the top right, turn on **Developer mode**.
5. Click **Load unpacked**.
6. Find and select the `build/` folder in main project folder.
7. Open a new tab in Chrome and Make sure the app loads and works correctly.

For more information or error handling visit [Create and publish custom Chrome apps & extensions](https://support.google.com/chrome/a/answer/2714278?hl=en).


 

## Documentation

For documentation the project uses *[react-styleguide](https://github.com/styleguidist/react-styleguidist)*

 **[Click here for the app's full documentation](https://shpiglify.github.io/new-tab-chrome-extension/)** 

## Testing & Development mode

### Development mode

To test the app in **react development node**, run **`npm start`**.

Take notice, some features does not work in development mode. In this case, the project uses mock data.

### Integration testing
For Integration testing the project uses *[selenium](https://www.npmjs.com/package/selenium-webdriver)* npm package.



To run the tests, use the **`npm run test`** command

Take notice, the tests are selenium based, and require you to have a chromedriver executable on your computer. The above npm package link contains further explanation regarding this matter.