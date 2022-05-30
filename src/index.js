import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import "./main.css"
import {Provider} from "react-redux";
import store from "./store";


const rootElement = document.getElementById('root');

createRoot(rootElement).render(
    <Provider store={store}>
        <App />
    </Provider>
)




