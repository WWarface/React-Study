import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {    
    
    root.render (
        <React.StrictMode>
            <BrowserRouter>
                <App store={state}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

renderEntireTree(store);

store.subscribe(() => {    
    let state = store.getState();
    renderEntireTree(state);
});

