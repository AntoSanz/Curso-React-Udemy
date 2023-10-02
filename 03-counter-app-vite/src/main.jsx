import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import { HelloWorldApp } from "./helloWorldApp";
import { FirstApp } from "./FirstApp";
import { FirstProps } from "./FirstProps";
import { CounterApp } from "./CounterApp";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        {/* <FirstApp /> */}
        <FirstProps  />
        {/* <CounterApp value={ 10 } /> */}
    </React.StrictMode>
);