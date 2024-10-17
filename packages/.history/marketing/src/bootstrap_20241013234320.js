import React from 'react';
import { createRoot } from 'react-dom/client';

const mount = (el) =>{
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<h1>Hi There</h1>)
}