import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {index} from "./store";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import theme from './theme'

ReactDOM.render(
    <Provider store={index}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <React.StrictMode>
                    <App/>
                </React.StrictMode>,
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
