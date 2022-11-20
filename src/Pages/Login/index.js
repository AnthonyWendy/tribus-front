import React, { useState } from "react";
import useApi from "../../helpers/api";
import { Login, PageArea } from "./styled";
import { doLogin } from "../../helpers/authHandler";
import { ErrorMessage } from "../../components/mainComponents";

const Page = () => {
    const api = useApi();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberPassword, setRememberPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);

        const json = await api.login(email, password);
        
        if (json.error) {
            if (typeof json.error === "object") {
                console.log(json.error);
                if (json.error.email) setError(json.error.email.msg);
                else if (json.error.password) setError(json.error.password.msg);
            } else setError(json.error);
        } else {
            console.log(email, password)
            doLogin(json.token, rememberPassword);
            window.location.href = "/principal";
        }
        setDisabled(false);
    };

    

    return (
        <PageArea>
            <Login>
                <div className="container">
                    <div className="area-title">
                        <h2>pollen</h2>
                        <hr />
                    </div>

                    {<ErrorMessage>{error}</ErrorMessage>}

                    <form onSubmit={handleSubmit}>
                        <label className="area">
                            <span>E-mail</span>
                            <br />
                            <input
                                type="email"
                                placeholder="e-mail"
                                disabled={disabled}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>

                        <label className="area">
                            <span>Senha</span>
                            <br />
                            <input
                                type="password"
                                placeholder="senha"
                                disabled={disabled}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>

                        <label className="area-lembrar">
                            <h3>lembrar a senha? </h3>
                            <div id="abc">
                                <span className="marcar"></span>
                                <input
                                    type="checkbox"
                                    disabled={disabled}
                                    checked={rememberPassword}
                                    onChange={() =>
                                        setRememberPassword(!rememberPassword)
                                    }
                                />
                            </div>
                        </label>

                        <button disabled={disabled}>entrar</button>
                    </form>
                </div>
            </Login>
        </PageArea>
    );
};
export default Page;
