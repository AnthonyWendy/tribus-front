import React, { useState, } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../helpers/api";
import { doLogin } from "../../../helpers/authHandler";


import { PageArea } from "./styled";


const Page = () => {

    const [name, setName] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState("");
    const [linhas, setLinhas] = useState("")
    const [linha, setLinha] = useState("")

    useEffect(() => {
        const getLInha = async () => {
            const linhas = await api.getLinhas();
            setLinhas(linhas)
        }
        getLInha();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError("");

        if (!name) {
            alert("Nome do ponto de referencia é obrigatório!");
        }

        if(!linha){
            alert("Selecione uma linha!");
        }

        const fData = new FormData();

        fData.append("nm_referencia", name);
        fData.append("id_linha", linha);

        const json = await api.newReferencia(fData);

        if (json.error) {
            setError(json.error);
            setDisabled(false);
        } else {
            doLogin(json.token, false);
            window.location.href = "/";
        }

        setDisabled(false);

        console.log(json)
        

        window.location.reload();
    }

    return (
        <PageArea>
            <div className="navigation">
              <Link to="/config/new/linha">Linha</Link>
                <Link to="/config/new/referencia">Ponto de Referência</Link>
                <Link to="/config/new/rota">Rota</Link>
                <Link to="/config/new/itinerario">Itinerário</Link>
            </div>
            <div className="container-cadastro">
                
                <div className="container">
                    
                    <form onSubmit={handleSubmit}>
                        
                        <div className="area-question">
                            <h3>Nome da referência</h3>
                            <input 
                                autoFocus
                                type="text"
                                disabled={disabled}
                                placeholder="Digite o nome da linha"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="area-question">
                            <h3>Linha</h3>
                            <select
                                disabled={disabled}
                                onChange={(e) => setLinha(e.target.value)}
                                required
                            >
                                <option>Selecione</option>
                                {linhas &&
                                    linhas.map((i) => (
                                        <option 
                                            key={i.id_linha}
                                            value={i.id_linha}
                                        >
                                            {i.nm_linha}
                                        </option>
                                    ))}

                            </select>
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