# GoodBuy AutoMart

This application was built to utilize the Google Maps Platform and it's various APIs. The primary technologies used are React to render custom styled-components, Express to retrieve data from a custom-built API, CSS for general styling, MySQL for cleaning and storing Craigslist used car listings.

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
npm start
```

## Running

Open `client/dist/index.html` in your browser

## Tech Stack
* [React](https://reactjs.org)
* [Node](https://nodejs.org/en)
* [Express](http://expressjs.com)
* [MySQL](https://www.mysql.com)
* [Heroku](https://www.heroku.com)

## Search Cars
The search cars section is consisting of the map component to the left, and the search component on the right. The map part displays the location of used cars available as markers. The search part allows the user to search and sort cars by options. The details component under the search portion allows the user to see selected car details.

![GoodBuy AutoMart Page Demo](readme_assets/main.gif)