import React from "react";
import ReactDOM from "react-dom/client";
import { App } from './App';;

// window.addEventListener('load', () => {
//     ReactDOM.render(<App />, document.getElementById('react_root'));
// });

const root = ReactDOM.createRoot(document.getElementById('react_root'));
root.render(<React.StrictMode><App /></React.StrictMode>)
