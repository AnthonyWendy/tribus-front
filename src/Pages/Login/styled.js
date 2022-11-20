import styled from "styled-components";

export const PageArea = styled.div`
    --primary-color: #141414;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
`;

export const Login = styled.div`
    .container {
        width: 420px;
        height: 540px;
        display: flex;

        flex-wrap: wrap;
        justify-content: center;
        padding: 70px;
        
        font-family: "Inter", sans-serif;

        background: #242424;
        border-width: 0.2px 2px 2px 0.2px;
        border-style: solid;
        border-color: #0d0d0d;
        border-radius: 150px 0px;

        .area-title {
            height: fit-content;
            color: #fb0043;
            font-size: 40px;

            align-items: center;

            h2 {
                margin-bottom: 5px;
                text-align: center;
                cursor: default;
            }

            hr{
                border: 1px solid #000000;
                width: 350px;
            }
        }

        form {
            height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            span {
                color: #fb0043;
            }

            input {
                padding: 10px;
                height: 40px;
                width: 350px;
                border: 1px solid #141414;
                background: #242424;
                outline: none;
                transition: border-color 150ms ease-in-out;
                &:hover,
                :focus {
                    border-color: #fb0043;
                }

                color: #fb0043;
                padding-left: 10px;
                font-size: 15px;
            }

            input::placeholder {
                font-style: italic;
                font-weight: 200;
            }
        }

        button {
            border: 0px solid #242424;

            text-align: center;
            font-family: "Inter", sans-serif;
            font-weight: 800;
            font-size: 30px;
            color: #fb0043;

            width: 350px;
            height: 52px;

            border: 0px solid #242424;

            background: var(--primary-color);
            border-width: 0px 2px 2px 0px;
            border-style: solid;
            border-color: rgba(36, 36, 36, 0.56);

            cursor: pointer;

            &:hover {
                border-color: #fb0043;
            }
        }

        .area-lembrar {
            width: 350px;
            display: flex;
            justify-content: space-between;
            color: #fb0043;

            input {
                all: unset;
                display: inline-block;
                background-color: #141414;
                width: fit-content;
                height: 19px;
                width: 19px;
                border-radius: 2px;

                transition: background-color 150ms ease-in-out;

                &:hover,
                :focus {
                    cursor: pointer;
                    background-color: gray;
                }
                &:checked {
                    background-color: #fb0043;
                }
            }

            h3,
            p {
                font-size: 16px;
                font-family: "Inter", sans-serif;
                font-weight: 200;
            }
        }
    }
`;
