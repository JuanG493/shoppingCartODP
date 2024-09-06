import { useContext } from "react";
import { carContext } from "./carContex";
import styles from "./ResumeShopping.module.css";

const Resume = () => {
    const { car, total, totalDiscount, totalOriginalPrice, checkout } = useContext(carContext)
    return (
        <div className={styles.container}>

            <div className={styles.information}>
                <h1>ORDER SUMMARY</h1>
                <div>
                    <span>{car.length} itms</span>
                    <span>${totalOriginalPrice.toPrecision(4)}</span>
                </div>
                <div>
                    <span>Discount</span>
                    <span>${totalDiscount.toPrecision(4)}</span>
                </div>
                <div>
                    <span>Sales Tax</span>
                    <span>$0</span>
                </div>
                <div>
                    <span>Delivery</span>
                    <span>$0</span>
                </div>
                <div>
                    <span>Total</span>
                    <span>${total.toPrecision(4)}</span>
                </div>
                <button
                    className={styles.checkout}
                    onClick={() => checkout()}
                >CHECKOUT</button>
            </div>
        </div>
    )


}

export default Resume;
