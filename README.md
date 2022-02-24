# My React
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- State management using [Redux Toolkit](https://redux-toolkit.js.org/)

  - Why do I use redux-toolkit? configuring Redux from scratch are complicated and requires more package and boilerplate
  - redux-toolkit is useful for fetching data more simple rather than axios, also no need for complicated configuration to store the data, redux-toolkit-query already handle caching logic so we no need to handwrite the logic to handle that
   

- Design system using [ANTd](https://ant.design/)

- This project hosted in the firebase hosting https://arireact.web.app/ 

- For deployment to firebase already using CI/CD workflow


## How to run in your local

There are no special command line to run this project because using `Create React App`

- `npm start` to run app in development mode
- `npm test` to run test runner, i use jest with testing-library to run unit-test