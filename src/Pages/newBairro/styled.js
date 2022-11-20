import styled from "styled-components";

export const PageArea = styled.div`


background: linear-gradient(107.56deg, #001064 0%, #2868A4 100%);

box-sizing: border-box;
margin: 0;
padding: 20px;
height: 90vh;


.container-cadastro{
    width: 80%;
    height: 50%;
    margin: auto;

    border: 3px solid #D9D9D9;
    border-radius: 6.90705px;

    font-family: 'Quicksand', sans-serif;
    font-size: 15px;
    color: #ffffff;

    form{
        margin-top:20px;

        .area-question{
            padding: 10px 0px 10px 45px;
            display: block;

            width: 400px;

            input{
                padding: 10px;
                height: 50px;
                width: 350px;

                // transition: border-color 150ms ease-in-out;

                &:hover,
                :focus {
                    border-color: #69CFFA;
                }
            }
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




    }
}
 
    
`;
