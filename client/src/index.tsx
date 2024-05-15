import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider, useSelector} from "react-redux";
import store from "./redux/store";
import Homepage from "./components/Homepage/Homepage";
import AboutPage from "./components/AboutPage/AboutPage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import CoursesPage from "./components/CoursesPage/CoursesPage";
import CourseDetailsPage from "./components/CoursesPage/CourseDetails/CourseDetailsPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import AdminPage from "./components/AdminPage/AdminPage";
import ProjectDetails from "./components/ProjectsPage/ProjectDetails/ProjectDetails";
import ServiceDetails from "./components/ServicesPage/ServiceDetails/ServiceDetails";
import Popup from "./components/reusable/Popup/Popup";
import Cover from "./components/Cover/Cover";
import Loader from "./components/reusable/Loader/Loader";
import ReviewsPage from "./components/ReviewsPage/ReviewsPage";
import ContactPage from "./components/ContactPage/ContactPage";

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
            <React.StrictMode>
                <Provider store={store}>
                    <ServicesPage/>
                </Provider>
            </React.StrictMode>
        )
    },
    {
        path: "servizi/:nomeServizio",
        element: (
            <React.StrictMode>
                <Provider store={store}>
                    <ServiceDetails/>
                </Provider>
            </React.StrictMode>
        )
    },
    {
        path: "about",
        element: (
            <React.StrictMode>
                <Provider store={store}>
                    <AboutPage/>
                </Provider>
            </React.StrictMode>
        )
    },
    {
        path: "corsi",
        element: (
            <React.StrictMode>
                <Provider store={store}>
                    <CoursesPage/>
                </Provider>
            </React.StrictMode>
        )
    },
    {
        path: "corsi/:nomeCorso",
        element: (
            <React.StrictMode>
                <Provider store={store}>
                    <CourseDetailsPage/>
                </Provider>
            </React.StrictMode>
        )
    },
    {
        path: "progetti",
        element: (
            <React.StrictMode>
                <Provider store={store}>
                    <ProjectsPage/>
                </Provider>
            </React.StrictMode>
        )
    },
    {
        path: "progetti/:nomeProgetto",
        element: (
            <React.StrictMode>
                <Provider store={store}>
                    <ProjectDetails/>
                </Provider>
            </React.StrictMode>
        )
    },
    {
        path: "recensioni",
        element: (
            <React.StrictMode>
                <Provider store={store}>
                    <ReviewsPage/>
                </Provider>
            </React.StrictMode>
        )
    },
    {
        path: "contattami",
        element: (
            <React.StrictMode>
                <Provider store={store}>
                    <ContactPage/>
                </Provider>
            </React.StrictMode>
        )
    },
    {
        path: "admin",
        element: (
            <React.StrictMode>
                <Provider store={store}>
                    <AdminPage/>
                </Provider>
            </React.StrictMode>
        )
    },
    {
        path: "*",
        element: (
            <React.StrictMode>
                <Provider store={store}>
                    <ErrorPage/>
                </Provider>
            </React.StrictMode>
        )
    }
])

const SharedPopup = () => {
    const {popupVisibility, popupMessage} = useSelector((state: any) => state.popup)
    useEffect(() => {
        if (popupVisibility) {
            document.body.classList.add('scroll-disabled')
        } else {
            document.body.classList.remove('scroll-disabled')
        }
    }, [popupVisibility]);

    return popupVisibility && <Popup popupVisibility={popupVisibility} message={popupMessage}/>
}

const SharedSideBar = () => {
    const {sideBarVisibility} = useSelector((state: any) => state.sideBar)

    return sideBarVisibility && <Cover/>
}

const SharedLoader = () => {
    const {loaderVisibility} = useSelector((state: any) => state.loader)

    return loaderVisibility && <Loader/>
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(<>
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
            <SharedPopup/>
            <SharedSideBar/>
            <SharedLoader/>
        </Provider>
    </React.StrictMode>
</>)

reportWebVitals();

