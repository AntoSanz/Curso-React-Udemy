import React from "react";
import ReactDOM from "react-dom/client";
// import { HelloWorldApp } from "./helloWorldApp";
import { FirstApp } from "./FirstApp";
import "./styles.css";
import { FirstProps } from "./FirstProps";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        <FirstApp />
        {/* <FirstProps title="Hola soy Anto" subTitle={123} /> */}
        <FirstProps subTitle={123} title="Hello props" />
    </React.StrictMode>
);
