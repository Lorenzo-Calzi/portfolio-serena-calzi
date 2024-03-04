import React from 'react';
import "./customersList.scss"
import Text from "../../reusable/Text/Text"
import {AxiosInstance} from "axios";
import {CourseProps} from "../CoursesList/CoursesList";

type CustomerListProps = {
    customers: CustomerProps[],
    setCustomers: React.Dispatch<React.SetStateAction<any>>,
    courses: CourseProps[],
    client: AxiosInstance,
    selectedEvent: string
}

export type CustomerProps = {
    _id: string
    nome: string
    cognome: string
    email: string
    telefono: string
    corso: string
    messaggio: string,
}

const CustomersList = ({customers, setCustomers, courses, client, selectedEvent}: CustomerListProps) => {
    const deleteCustomer = async (id: string) => {
        const response = await client.delete(`/customers/${id}`)
        const updatedCustomers = customers.filter((customer: CustomerProps) => customer._id !== id)
        setCustomers(updatedCustomers)
    }

    return (
        <section id="customers-list">
            <div className="customers">
                {
                    customers && customers.filter((customer: CustomerProps) => selectedEvent ? customer.corso === selectedEvent : customer).map((customer: CustomerProps, index: number) => (
                        <div className="customer" key={index}>
                            <div className="data">
                                <div className="row">
                                    <Text type={"h4"} color={"#fe5d37"}>{customer.nome && customer.nome}</Text>
                                    <Text type={"h4"} color={"#fe5d37"}>{customer.cognome && customer.cognome}</Text>
                                </div>

                                <div className="row">
                                    <Text type={"p-big"}>Email:</Text>
                                    <Text type={"p-big"}>{customer.email && customer.email}</Text>
                                </div>

                                <div className="row">
                                    <Text type={"p-big"}>Telefono:</Text>
                                    <Text type={"p-big"}>{customer.telefono && customer.telefono}</Text>
                                </div>

                                <div className="row">
                                    <Text type={"p-big"}>Messagio:</Text>
                                    <Text type={"p-big"}>{customer.messaggio && customer.messaggio}</Text>
                                </div>
                            </div>

                            <div className="trash" onClick={() => deleteCustomer(customer._id)}/>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default CustomersList