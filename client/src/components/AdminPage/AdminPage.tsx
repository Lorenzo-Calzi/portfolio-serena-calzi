import React from 'react';
import "./adminPage.scss"
import "../reusable/Text/Text"
import Header from "./Header/Header";
import CustomersList from "./CustomersList/CustomersList";

const AdminPage = () => {

    return (
        <div id="admin-page">
            <Header/>
            <CustomersList/>
        </div>
    )
}

export default AdminPage