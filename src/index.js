import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styles from './styles/App.css'
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
import ContentStore from './store/ContentStore';

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore(),
        content: new ContentStore()
    }}>
        <App />
    </Context.Provider>
);
