import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const CardWhitImg = (props) => {
    return (
        <div className={styles.container}>
            <img src={props.srcImg} alt={props.name} className={styles.img} />
            <button>
                <Link to={props.to} state={props.info}>
                    {props.name}</Link>
            </button>
        </div>
    )
}
CardWhitImg.propTypes = {
    to: PropTypes.string,
    srcImg: PropTypes.string,
    name: PropTypes.string,
    info: PropTypes.object
};

export default CardWhitImg;