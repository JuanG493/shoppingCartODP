
import { useState } from "react";
import sizesList from "../util/sizeList.js";
import styles from "./Sizes.module.css";

const Sizes = ({ handleSelection }) => {
    const [currentSelect, setCurrentSelect] = useState("S");

    function handleClick(sizeStr) {
        handleSelection(sizeStr)
        setCurrentSelect(sizeStr)
    }

    return (
        <div className={styles.container}>
            {sizesList.map((s, index) => {
                return (
                    <div
                        key={index}
                        className={s == currentSelect ? styles.selected : styles.size}
                        onClick={() => handleClick(s)} >
                        {s}</div>
                )
            })}
        </div>
    )
}
export default Sizes;