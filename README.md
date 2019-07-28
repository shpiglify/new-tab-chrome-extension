
# [New Tab Extension](https://github.com/shpiglify/new-tab-chrome-extension) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) 



New Tab is a chrome extension that changes and controls some of the browser's default settings and behaviours. 

#### Main features:
* **Control chrome's new-tab page:** New tab contains a simple text input, which acts as a search box:
User's typing will generate a list of auto suggested keywords (using the *Auto-suggest API*). User's submit will redirect the page into search results page (using the *Search redirect API*).
* **Taking over the default search settings:** The extension takes over the default search engine, and the auto-suggest in the browser.
* **Search history widget:** The extension searches for User's last websites in chrome's surfing history, and displays them as links to the user.
* **Modular component based structure, easy to scale:** Because the app is written using *[react framework](https://github.com/facebook/create-react-app)*, it's components are fully modular, and easy to reuse.


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

The documentation was developed using *[react-styleguide](https://github.com/styleguidist/react-styleguidist)*

 **[Click here for the app's full documentation](https://shpiglify.github.io/new-tab-chrome-extension/)** 

## Testing & Development mode

### Development mode

To test the app in **react development node**, run **`npm start`**.

Take notice, due to the browser's limitaion policy some features won't work in development mode and mock data will be presented.

### Integration testing
For Integration testing the project uses *[selenium](https://www.npmjs.com/package/selenium-webdriver)* npm package.



To run the tests, use the **`npm run test`** command.

Take notice, in order to perform selenium based tests, you must have chromedriver executable installed. The above npm package link contains further explanation on this matter.