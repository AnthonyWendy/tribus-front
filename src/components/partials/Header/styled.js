import styled from "styled-components";

export const HeaderArea = styled.div`
    background: linear-gradient(107.56deg, #001064 0%, #2868A4 100%);

    height: 10vh;

    .container {

        font-family: 'Quicksand', sans-serif;
        font-size: 20px;

        display: flex;
        justify-content: space-between;

        max-width: 1000px;
        margin: auto;
        height: 100%;
        align-items: center;
    }
    
    a {
        text-decoration: none;
    }
    
    .title {
        display: flex;
        align-items: center;
    
        color: #f8f8ff;
        
        .bus-header{
            width: 25px;
            height: 25px;
            margin-right: 4px;
        }
    }



    nav{
        padding-top: 10px;
        padding-bottom: 10px;
        width: 32%;

        ul, li {
            list-style: none;            
            margin: 0;
            padding: 0;
        }

        ul{
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            cursor: pointer;
            
            li {
                margin: 0;
                padding: 0px 5px 0px 5px;
    

                list-style-type: none;
    
                font-family: 'Quicksand', sans-serif;
                font-size: 20px;
                
                .icon{
                    width: 27px;
                    margin: 0px 5px 0px 5px;

                }    

                
                a{
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;


                }
                a:visited {
                    color: #ffffff
                  }
    
                cursor: pointer; 
    
            }

        }
        

        // li {
        //     display: flex;
        //     align-items: center;
        //     justify-content: center;
        //     cursor: pointer;
        //     a,
        // }

        
    }
















    @media (max-width: 768px) {
        height: auto;
        .container {
            flex-direction: column;
        }
        .logo {
            justify-content: center;
            margin: 20px 0;
        }
        nav ul {
            flex-direction: column;
            height: auto;
        }
        nav li {
            margin: 10px 20px;
        }
    }
`;
