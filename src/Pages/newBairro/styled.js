import styled from "styled-components";

export const PageArea = styled.div`


background: linear-gradient(107.56deg, #001064 0%, #2868A4 100%);

box-sizing: border-box;
margin: 0;
padding: 15vh 20px 20px 20px;
height: 90vh;


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
            input{
                padding: 10px;
                height: 50px;
                width: 350px;
            }
        }
    }
    
    .buttons{
        align-items: end;
        height: 20vh;
        button {
            margin-left: 45px;
            width: 22vh;
            height: 7vh;
    
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
