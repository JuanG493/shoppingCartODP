import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Button.module.css";
import { carContext } from "./carContex";
import stylesB from "./Product.module.css";
import Sizes from "./Sizes";

const Product = () => {
    const { addProduct } = useContext(carContext);
    const { state: info } = useLocation();
    const [size, setSize] = useState("S");

    function handleSize(sx) {
        setSize(sx)
    }

    //this obj will be send
    const product = {
        id: (info.id + info.sku +size),
        name: info.title,
        price: info.price,
        size: size, 
        sku: info.sku,
        thumbnail: info.thumbnail,
        cuantity: 1,
        discount: info.discountPercentage

    }
    //TODO  reviews
    return (
        <div className={stylesB.container}>
            <div className={stylesB.preview}>
                <div>
                    <img src={info.thumbnail} alt={info.title} />
                </div>
                <div className={stylesB.containerInfo}>
                    <h1>{info.title}</h1>
                    <h3>Price: {info.price}</h3>
                    <p>{info.description}</p>
                    <Sizes handleSelection={handleSize} ></Sizes>
                    <h3>Discount Percentage: {info.discountPercentage}%</h3>
                    <h3>Stock: {info.stock}</h3>
                    <button
                     onClick={() => addProduct(product)}
                     className={styles.shopping}
                     >Add to my &#128722;</button>
                </div>
            </div>
        </div>
    )
}

export default Product;