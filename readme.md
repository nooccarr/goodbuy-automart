# GoodBuy AutoMart

This application was built to utilize the Google Maps Platform and its various APIs. The primary technologies used are React hooks to render custom styled-components, Express to retrieve data from a custom-built API, CSS for general styling, and MySQL for storing used car listings extracted from Craigslist.

## Building and Running Environment

First install dependencies:

```sh
npm install
```

To create a development build:

```sh
npm run build-dev
```

To run node server:

```sh
npm start-dev
```

## Tech Stack
* [React](https://reactjs.org)
* [Node](https://nodejs.org/en)
* [Express](http://expressjs.com)
* [MySQL](https://www.mysql.com)
* [Heroku](https://www.heroku.com)

## Search and Favorites Page

The Home page is consisting of the navigation component on the top, the map component to the left, and the search component to the right. The navigation section has the option to choose from the Home and Favorites page. The map section displays the location of used cars available as markers. The search section allows the user to search and sort cars by options. The details component under the search portion provides selected car details and a button to add to the Favorites page. The user has the ability to view and remove cars saved on the Favorites page.

![GoodBuy AutoMart Page Demo](readme_assets/main.gif)

## Running

Open [GoodBuy AutoMart](https://goodbuy-automart.herokuapp.com) in the browser.

## Accomplishments

* Achieved the average [Lighthouse score](readme_assets/lighthouse.png) of 95.75 for Desktop devices.

## Future Implementations

* Landing Page
* Authentication