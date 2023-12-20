import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AboutPage from "./components/Aboutpage/AboutPage";
import {Provider} from "react-redux";
import store from "./redux/store";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element:   <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    },
    {
        path: "about",
        element: <AboutPage />
    }
])

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(<RouterProvider router={router} />)

reportWebVitals();