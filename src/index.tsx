import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import Homepage from "./components/Homepage/Homepage";
import AboutPage from "./components/Aboutpage/AboutPage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import CoursesPage from "./components/CoursesPage/CoursesPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <React.StrictMode>
                <Provider store={store}>
                    <Homepage/>
                </Provider>
            </React.StrictMode>
        )
    },
    {
        path: "servizi",
        element: (
            <ServicesPage/>
        )
    },
    {
        path: "about",
        element: (
            <AboutPage/>
        )
    },
    {
        path: "corsi",
        element: (
            <CoursesPage/>
        )
    },
    {
        path: "progetti",
        element: (
            <ProjectsPage/>
        )
    },
    {
        path: "*",
        element: (
            <ErrorPage/>
        )
    }
])

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(<RouterProvider router={router}/>)

reportWebVitals();

