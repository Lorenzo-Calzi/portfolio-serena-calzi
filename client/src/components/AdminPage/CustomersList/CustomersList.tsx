import React, {useEffect, useState} from 'react';
import "./customersList.scss"
import Text from "../../reusable/Text/Text"
import axios from "axios";

type CustomerProps = {
    _id: string
    nome: string
    cognome: string
    email: string
    telefono: string
    corso: string
    messaggio: string,
}

const client = axios.create({
    baseURL: "/api"
});

const CustomersList = () => {
    const [customers, setCustomers] = useState([])
    const [selectedEvent, setSelectedEvent] = useState("")

    useEffect(() => {
        getAllCustomers()
    }, [])

    const getAllCustomers = async () => {
        const response = await client.get("/customers");
        setCustomers(response.data)
    }

    const deleteCustomer = async (id: string) => {
        const response = await client.delete(`/customers/${id}`)
        const updatedCustomers = customers.filter((customer: CustomerProps) => customer._id !== id)
        setCustomers(updatedCustomers)
    }

    return (
        <section id="customers-list">
            <div className="page-container">
                <div className="content">

                    <div className="filter">
                        <select name="" id="" onChange={(e) => setSelectedEvent(e.target.value)}>
                            <option value="">Seleziona un corso</option>
                            <option value="Corso Massaggio Di Gruppo">Corso Massaggio Di Gruppo</option>
                            <option value="Corso Massaggio Individuale">Corso Massaggio Individuale</option>
                        </select>

                        <Text type={"p-big"} textAlign={"center"}>
                            TOT: {customers && customers.filter((customer: CustomerProps) => selectedEvent ? customer.corso === selectedEvent : customer).length}/5
                        </Text>
                    </div>

                    <div className="customers">
                        {
                            customers && customers.filter((customer: CustomerProps) => selectedEvent ? customer.corso === selectedEvent : customer).map((customer: CustomerProps) => (
                                <div className="customer">
                                    <div className="data">
                                        <div className="row">
                                            <Text type={"h4"} color={"#fe5d37"}>{customer.nome && customer.nome}</Text>
                                            <Text type={"h4"}
                                                  color={"#fe5d37"}>{customer.cognome && customer.cognome}</Text>
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
                </div>
            </div>
        </section>
    )
}

export default CustomersList