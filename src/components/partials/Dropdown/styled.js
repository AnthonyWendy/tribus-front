import styled from "styled-components";

export const DropdownStyle = styled.div`
    -webkit-touch-callout: none; /* iPhone OS, Safari */
    -webkit-user-select: none; /* Chrome, Safari 3 */
    -khtml-user-select: none; /* Safari 2 */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
    user-select: none; /* Possível implementação no futuro */
    height: 100%;
    width: 200px;
    z-index: 100;
    flex-wrap: wrap;
    cursor: pointer;
    font-size: 18px;
    span {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        color: #fb0043;
        &:hover {
            background: #242424;
        }
    }
    ul {
        display: none;

        li {
            background: #141414;
            width: 100%;
            margin: 0;
            &:hover {
                background: #242424;
            }
            & > * {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
`;
