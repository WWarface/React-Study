import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addMessage,subscribe,updateMessageText} from './redux/state';
import state from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {    
    root.render (
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                    addMessage={addMessage}
                    updateMessageText={updateMessageText}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

renderEntireTree(state);

subscribe(renderEntireTree);

