import React, { useState, useRef} from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../helpers/api";
import { doLogin } from "../../../helpers/authHandler";

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';


import { PageArea } from "./styled";


const Page = () => {

    const [name, setName] = useState("");
    const [horario, setHorario] = useState("");
    const [linha, setLinha] = useState("");
    const fileField = useRef();

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState("");
    const [linhas, setLinhas] = useState("");

    const [referenciasList, setReferenciasList] = useState([]);
    const [selectReferencias, setSelectReferencias] = useState([]);

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
            },
        },
        };

    useEffect(() => {
        const getLInha = async () => {
            const linhas = await api.getLinhas();
            setLinhas(linhas)
        }
        getLInha();
    }, {});

    useEffect(() => {
        const getReferencias = async () => {
            const referencias = await api.getReferenciasList(linha);
            setReferenciasList(referencias)
        }
        getReferencias();
    });

    console.log(referenciasList)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError("");

        const fData = new FormData();

        fData.append("nm_rota", name);
        fData.append("horario", horario);
        fData.append("id_linha", linha);
        fData.append("referencias", selectReferencias);
        if (fileField.current) {
            if (fileField.current.files.length > 0) {
                for (let i = 0; i < fileField.current.files.length; i++) {
                    fData.append("img", fileField.current.files[i]);
                }
            }
        }

        console.log(fData)
        
        const json = await api.newRota(fData);

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

    const [selectLinhas, setSelectLinhas] = useState([])

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectLinhas(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
            );
    };

    return (
        <PageArea>
            <div className="navigation">
              <Link to="/config/new/linha">Linha</Link>
                <Link to="/config/new/referencia">Ponto de Referência</Link>
                <Link to="/config/new/rota" className="rota">Rota</Link>
                <Link to="/config/new/itinerario">Itinerário</Link>
            </div>
            <div className="container-cadastro">
                
                <div className="container">
                    
                    <form onSubmit={handleSubmit}>
                        <div className="area-question_duo">
                            <div className="name">
                                <h3>Nome da rota</h3>
                                <input 
                                    className="metada"
                                    autoFocus
                                    type="text"
                                    disabled={disabled}
                                    placeholder="Digite o nome da rota"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="img">
                                <h3>Imagem</h3>
                                <input
                                    type="file"
                                    ref={fileField}
                                    disabled={disabled}
                                    multiple
                                />
                            </div>
                        </div>
                        <div className="area-question_duo">
                            <div className="area-linha">
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
                            <div className="area-horario">
                                <h3>Horário de saída</h3>
                                <input  
                                    type="time"
                                    disabled={disabled}
                                    value={horario}
                                    onChange={(e) => setHorario(e.target.value)}
                                />
                            </div>
                        </div>


                        <div className="area-question linhas">
                        <label>
                            <h3>Referências:</h3>
                                <Select className="selectLinha"
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                value={referenciasList}
                                onChange={handleChange}
                                input={<OutlinedInput />}
                                renderValue={(selected) => {
                                    let names = [];
                                    
                                    for(const referencia of referenciasList) 
                                        if(selected.includes(referencia.id_referencia))
                                            names.push(referencia.nm_referencia);
                                    return names.join(', ');
                                }}
                                MenuProps={MenuProps}
                                >
                                {referenciasList &&
                                    referenciasList.map((referencia) => (
                                        <MenuItem key={referencia.id_referencia} value={referencia.id_referencia}>
                                        <Checkbox checked={selectReferencias.includes(referencia.id_referencia)} />
                                        <ListItemText primary={referencia.id_referencia}/>
                                        </MenuItem>
                                    ))}
                                </Select>
                            
                        </label>
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