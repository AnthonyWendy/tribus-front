import styled from "styled-components";

export const PageArea = styled.div`


background: linear-gradient(107.56deg, #001064 0%, #2868A4 100%);

box-sizing: border-box;
margin: 0;
padding: 15vh 20px 20px 20px;
height: 90vh;

.navigation {
    display: flex;
    justify-content: center;

    width: 100%;

    a {
        text-decoration: none;
        font-size: 24px;
        background-color: rgb(0, 80, 125);
        padding: 8px;
        margin: 0 16px;
        color: #FFF;

        border: none;
        border-radius: 10px;

        cursor: pointer;
    }
}

.container-cadastro{
    width: 80%;
    height: 50%;
    margin: auto;

    display: block;

    border: 3px solid #D9D9D9;
    border-radius: 6.90705px;

    font-family: 'Quicksand', sans-serif;
    font-size: 15px;
    color: #ffffff;

    

    form{
        margin-top:20px;
        .area-question{
            padding: 10px 0px 10px 45px;
            select,input{
                border-radius: 7px;
                padding: 10px;
                height: 50px;
                width: 97%;
            }

            select{
                cursor: pointer;

            }
        }
    }

    .buttons{
        align-items: end;
        height: 15vh;
        display: flex;
        justify-content: right;
        margin-top: -15px;
        margin-right: 30px;

        button {
            margin-left: 45px;
            width: 22vh;
            height: 7vh;

            cursor: pointer;

    
            text-align: center;
            font-family: "Inter", sans-serif;
            font-weight: 800;
            font-size: 20px;
            color: #FFFFFF;
    
            border-radius: 7.61248px;
    
         }
        .cancelar{
            background: #8B0000;
    
        }
        .confirmar{
            background: #008B0E;
        }
    }
}
 
    
`;
