import React from "react";
import "./errorPage.scss";
import Text from "../reusable/Text/Text";
import Button from "../reusable/Button/Button";

const ErrorPage = () => {
    return (
        <div id="error-page">
            <div className="page-container">
                <div className="content">
                    <div className="copies">
                        <Text type={"h2"} color={"#b5bfff0d"}>
                            404 Error
                        </Text>
                        <Text type={"h1"} color={"white"}>
                            Pagina Non Trovata
                        </Text>
                        <Text type={"h4"} color={"white"}>
                            Purtroppo qualcosa è andato storto e questa pagina non esiste. Prova a
                            utilizzare la ricerca o torna alla pagina precedente.
                        </Text>
                    </div>

                    <Button text={"Torna alla home"} link={"/"} />
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
