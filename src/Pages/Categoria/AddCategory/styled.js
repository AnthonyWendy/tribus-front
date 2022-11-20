import styled from "styled-components";

export const PageArea = styled.div`
    padding: 20px;
    background: #242424;

    .container-cadastro {
        width: 1000px;
        height: calc(95vh - 50px);
        margin: auto;

        background: #242424;

        font-size: 15px;
        font-family: "Inter", sans-serif;
        color: #fb0043;

        form {
            margin-top: 20px;

            .area {
                padding: 10px 0px 10px 45px;
                display: inline-block;

                width: 400px;
            }

            button {
                margin-left: 45px;
                width: 350px;
                height: 50px;

                text-align: center;
                font-family: "Inter", sans-serif;
                font-weight: 800;
                font-size: 20px;
                color: #fb0043;

                background: #141414;
                border-width: 0px 2px 2px 0px;
                border-style: solid;
                border-color: rgba(36, 36, 36, 0.56);

                cursor: pointer;

                &:hover {
                    border-color: #fb0043;
                }
            }

            input {
                padding: 10px;
                height: 50px;
                width: 350px;
                border: 1px solid #141414;
                background: #242424;
                outline: none;
                color: #fb0043;
                padding-left: 10px;
                font-size: 15px;
                transition: border-color 150ms ease-in-out;
                &:hover,
                :focus {
                    border-color: #fb0043;
                }
            }
        }
    }
`;
