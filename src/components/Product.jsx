import { useLocation } from "react-router-dom";
import Sizes from "./Sizes";

import { useContext, useState } from "react";
import styles from "./Button.module.css";
import { carContext } from "./carContex";

const Product = () => {
    const { addProduct } = useContext(carContext);
    const { state: info } = useLocation();
    const [size, setSize] = useState("S");

    function handleSize(sx) {
        setSize(sx)
    }

    const product = {
        id: (info.id + info.sku +size),
        name: info.title,
        price: info.price,
        size: size, //TODO
        sku: info.sku,
        thumbnail: info.thumbnail,
        cuantity: 1
    }
    //TODO  reviews
    return (
        <>
            <h1> {info.title} </h1>
            <main>
                <div>
                    <img src={info.thumbnail} alt={info.title} />
                </div>
                <div>
                    <h1>{info.title}</h1>
                    <h3>Price: {info.price}</h3>
                    <p>{info.description}</p>
                    <Sizes handleSelection={handleSize} ></Sizes>
                    <h3>Discount: {info.discountPercentage}</h3>
                    <h3>Stock: {info.stock}</h3>
                    <button
                     onClick={() => addProduct(product)}
                     className={styles.shopping}
                     >Add to my &#128722;</button>
                </div>
            </main>
        </>
    )
}

export default Product;