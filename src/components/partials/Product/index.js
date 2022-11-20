import React from "react";
import { Item } from "./styled";
import { Link } from "react-router-dom";
import useApi from "../../../helpers/api";

// const priceMask = createNumberMask({
//     prefix: "R$ ",
//     includeThousandsSeparator: true,
//     thousandsSeparatorSymbol: ".",
//     allowDecimal: true,
//     decimalSymbol: ",",
// });

export default (props) => {
    const api = useApi();

    return (
        <Item className="productItem">
            <Link
                className="itemLink"
                to={`/product/${props.product.id_produto}`}
            >
                <div className="itemImage">
                    <img
                        src={`${api.getApi()}/media/${
                            props.product.images.length > 0
                                ? props.product.images[0].url
                                : ""
                        }`}
                        alt=""
                    />
                </div>

                <div className="itemName">{props.product.nm_produto}</div>

                <div className="itemPrice">
                    <span>R$ </span>
                    {props.product.valor}
                </div>

                <div className="itemDescription">
                    {props.product.descricaoproduto}
                </div>
            </Link>
        </Item>
    );
};
