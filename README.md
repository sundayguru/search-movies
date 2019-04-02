# search-movies
Your number one movies directory


## Prerequisites
This project requires Node and Node package manager. Get the latest version of (Node)[https://nodejs.org/en/] from their official website


## Installation

* Clone the repository `git clone https://github.com/sundayguru/search-movies.git`
* Change to root directory `cd search-movies`
* Install all dependencies `npm install`
* Copy and configure settings `cp config/settings.example.json  config/settings.json`
* Open config/settings.json file and update `apiKey` to a valid themoviedb.org api key. You can use `f3a05026119d09f84c9aaef927a18ac2` for testing purpose.
* Run the server `npm run dev`
* Visit http://localhost:9000 to see application in action

## Run Tests
* `npm run test`


## Project Dependencies

```
{
    "axios": "^0.18.0",
    "humps": "^2.0.1",
    "react": "^16.8.6",
    "react-autocomplete-input": "^1.0.10",
    "react-bubble-preloader": "^1.3.2",
    "react-dom": "^16.8.6",
    "react-hot-loader": "^4.8.2",
    "react-redux": "^6.0.1",
    "react-visibility-sensor": "^5.0.2",
    "redux": "^4.0.1",
    "redux-saga": "^1.0.2",
    "redux-thunk": "^2.3.0"
} 
```

## Project Development Dependencies

```
{
    "@babel/core": "^7.4.0",
    "@babel/preset-env": "^7.4.2",
    "@babel/preset-es2016": "^7.0.0-beta.53",
    "@babel/preset-react": "^7.0.0",
    "babel-jest": "^24.5.0",
    "babel-loader": "^8.0.5",
    "css-loader": "^2.1.1",
    "enzyme": "^3.9.0",
    "enzyme-adapter-react-16": "^1.11.2",
    "jest": "^24.5.0",
    "react-test-renderer": "^16.8.6",
    "redux-mock-store": "^1.5.3",
    "style-loader": "^0.23.1",
    "webpack": "^4.29.6",
    "webpack-cli": "^3.3.0",
    "webpack-dev-server": "^3.2.1"
} 
```