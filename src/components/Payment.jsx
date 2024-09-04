
//manejar el pago y la eliminacion de los productos

import { useContext } from "react";
import { carContext } from "./carContex";
import styles from "./Payment.module.css";

const Payment = () => {
    const { car, operator, deleteProduct } = useContext(carContext);

    return (
        <div className={styles.container}>
            <h1>Hello from payment</h1>
            {car.map(product => {
                return (
                    <div className={styles.product} key={product.id}>
                        <div>
                            <img src={product.thumbnail} alt={product.title} />
                        </div>
                        <div className={styles.information}>
                            <h2>{product.name}</h2>
                            <h6>{product.sku}</h6>
                            <div>
                                <h4>{product.size}</h4>
                                <h4>{product.color}</h4>
                            </div>
                            <div className={styles.sumRes}>
                                <span
                                    className={styles.operator}
                                    onClick={() => operator(product.id, "-")}
                                >-</span>
                                <span>{product.cuantity}</span>
                                <span
                                    className={styles.operator}
                                    onClick={() => operator(product.id, "+")}
                                >+</span>
                            </div>
                            <h3>{product.price}</h3>
                        </div>
                        <div
                            className={styles.trash}
                            onClick={() => deleteProduct(product.id)}
                        >&#128465;</div>
                    </div>
                )
            })}
        </div>
    )
}

//TODO button pago y eliminar los productos del carrito?
export default Payment;