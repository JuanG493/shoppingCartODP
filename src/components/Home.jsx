import { Link } from 'react-router-dom';
import men from '../assets/men1.jpg';
import women from '../assets/women1.jpg';
import listCategories from "../util/listCategories";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contImg}>
                <img className={styles.imagen} src={men} alt="women"></img>
                <Link
                    to={"categories/mens"}
                    state={listCategories[0].subCategories}
                    className={styles.button}>Mens</Link>
            </div>
            <div className={styles.contImg}>
                <img className={styles.imagen} src={women} alt="women"></img>
                <Link
                    to={"categories/womens"}
                    state={listCategories[1].subCategories}
                    className={styles.button}>Womens</Link>
            </div>

        </div>
    )

}
export default Home;