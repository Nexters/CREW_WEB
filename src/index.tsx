import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { MAIN_COLOR } from "constants/colors";

import rootSaga from "./sagas/rootSaga";
import rootReducer from "./reducers/rootReducer";

import * as serviceWorker from "./serviceWorker";
import App from "./App";
import "./index.css";

const sagaMiddleWare = createSagaMiddleware();
const logger = createLogger();

const middlewares = [];
middlewares.push(sagaMiddleWare);
if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleWare.run(rootSaga);

const theme = createMuiTheme({
  typography: {
    fontFamily: "NanumSquareEB"
  },
  palette: {
    secondary: {
      main: MAIN_COLOR
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
