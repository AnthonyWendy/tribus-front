import styled from "styled-components";

export const Item = styled.div`
    position: relative;
    transition: 0.2s ease-in-out;
    height: max-content;

    .to-ad {
        visibility: hidden;
        position: absolute;
        color: white;
        text-decoration: none;
        bottom: 70px;
        text-align: right;
        width: 85%;
        height: 20px;
        z-index: 100;
        text-shadow: 0px 2px 3px #000000;
        &:hover {
            text-decoration: underline;
            visibility: visible;
        }
    }

    .itemLink {
        display: block;
        border: 1px solid white;
        margin: 10px;
        text-decoration: none;
        padding: 10px;
        border-radius: 5px;
        color: black;
        background-color: white;

        position: relative;

        &:hover {
            border-color: #ccc;
            ~ .to-ad {
                visibility: visible;
            }
        }

        .itemImage {
            position: relative;
            img {
                min-height: 250px;
                width: 100%;
                border-radius: 5px;
            }
            &::after {
                position: absolute;
                content: "";
                border-radius: 5px;
                left: 0;
                width: 100%;
                height: 99%;
                box-shadow: inset 0px -15px 50px 0px rgba(0, 0, 0, 0.4);
            }
        }

        .itemName {
            font-weight: bold;
        }

        .itemPrice {
            font-size: 15px;
        }

        .itemDescription {
            overflow: hidden;
            text-overflow: ellipsis;
        }

        /* &:hover::before {
            content: "";
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;

            background-color: rgba(0, 0, 0, 0.6);
            border-radius: 5px;
            width: calc(100% - 20px);
            height: calc(100% - 80px);
            top: 10px;
            left: 10px;
            z-index: 1;
        } */
    }

    &::after {
        content: "";
        transition: transform 0.2s ease-in-out;
        position: absolute;
        height: 10px;
        width: calc(100% - 40px);
        background: var(--color-primary);
        bottom: 60px;
        left: 20px;
        transform: scaleX(0);
        transform-origin: right;
        z-index: 2;
    }
    &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }
`;
