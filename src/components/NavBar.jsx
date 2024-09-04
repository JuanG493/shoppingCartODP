import { Link } from "react-router-dom";
import threadsLogo from '../assets/threads.png';
import listCategories from "../util/listCategories";
import styles from "./NavBar.module.css";

const NavBar = () => {

    return (
        <div className={styles.container}>
                <img className={styles.logo} src={threadsLogo} alt="company-logo"></img>
            {/* <div> */}
            {/* </div> */}
            <ul className={styles.links}>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>

                {listCategories.map(cat => (
                    <li key={cat.id}>
                        <Link
                            to={"categories/" + cat.title}
                            state={cat.subCategories}>
                            {cat.title}</Link>
                    </li>
                ))}
                <li>
                    <Link to={"payment"}>Car</Link>
                </li>
            </ul>
        </div>
    )
}
export default NavBar;