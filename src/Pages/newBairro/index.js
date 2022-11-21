import React, { useState, } from "react";
import api from "../../helpers/api";
import { doLogin } from "../../helpers/authHandler";


import { PageArea } from "./styled";


const Page = () => {

    const [name, setName] = useState("");

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError("");

        if (!name.trim()) {
            error.push("Nome da linha é obrigatório");
        }

        console.log(name);

        const json = await api.newLinha({name});

        if (json.error) {
            setError(json.error);
            setDisabled(false);
        } else {
            doLogin(json.token, false);
            window.location.href = "/";
        }

        setDisabled(false);

        window.location.reload();
    }

    return (
        <PageArea>
            <div className="container-cadastro">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="area-question">
                            <h3>Nome do linha</h3>
                            <input 
                                autoFocus
                                type="text"
                                disabled={disabled}
                                placeholder="Digite o nome da linha"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="buttons">
                            <button className="cancelar">Cancelar</button>
                            <button className="confirmar">Confirmar</button>
                    </div>
                    </form>
                    
                </div>
            </div>
        </PageArea>
    );
};
export default Page;