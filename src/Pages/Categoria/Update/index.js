import React, { useState } from "react";

import useApi from "../../../helpers/api";
import { PageArea } from "./styled";
import { ErrorMessage } from "../../../components/mainComponents";
import { doLogin } from "../../../helpers/authHandler";

const Page = () => {

    const api = useApi();

    const [name, setName] = useState("");

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError("");
        let errors = [];

        if(!name.trim()){
            error.push("Nome do produto é obrigatório")
        }

        if (errors.length !== 0) {
            setError(errors.join("\n"));
            setDisabled(false);
            return;
        }

        const json = await api.addCategory(name);

        if(json.error) {
            setError(json.error);
            setDisabled(false);
        } else {
            doLogin(json.token, false);
            window.location.href = "/";
        }

        setDisabled(false);
    };

    return (
        <PageArea>
            <div className="container-cadastro">
                <h2>Cadastro de categoria</h2>
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <h3>Nome:</h3>
                        <input
                            type="text"
                            disabled={disabled}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <button>cadastrar</button>
                    <div className="area">
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                    </div>
                </form>
            </div>     
        </PageArea>

    );
};
export default Page;