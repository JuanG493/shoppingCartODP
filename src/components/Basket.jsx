import { useContext } from "react";
import styles from "./Basket.module.css";
import { carContext } from "./carContex";

function ShoppingCar() {
    const {car} = useContext(carContext)

    return (
        <div>
            <svg width="60"  viewBox="0 0 91.692 91.692" fill="#BF754B" className={styles.svgContainer} 
                // fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                // width="800px" height="800px" viewBox="0 0 91.692 91.692"
                // xml:space="preserve">
                >
                    
                        <path
                            d="M71.942,5.329c-9.074,0-16.718,6.156-19.021,14.508H45.23h-4.738H16.569l-1.395-6.892L1.246,10.62L0,18.089l8.785,1.463
			                l9.32,44.964l-4.092,13.011h5.658c-0.32,0.772-0.5,1.627-0.5,2.522c0,3.486,2.656,6.313,5.934,6.313
			                c3.278,0,5.932-2.826,5.932-6.313c0-0.896-0.18-1.75-0.496-2.522H61.83c-0.318,0.772-0.496,1.627-0.496,2.522
			                c0,3.486,2.654,6.313,5.932,6.313c3.275,0,5.933-2.826,5.933-6.313c0-0.896-0.181-1.75-0.498-2.522h5.017v-7.57H24.332l0.766-2.43
			                l53.035-22.192v-1.516c7.863-2.604,13.56-10.014,13.56-18.74C91.692,14.189,82.832,5.329,71.942,5.329z M71.942,38.829
			                c-7.582,0-13.75-6.168-13.75-13.75s6.168-13.75,13.75-13.75s13.75,6.168,13.75,13.75S79.524,38.829,71.942,38.829z"/>
                    <text x="65" y="35" fill="#8C4C27" className={styles.text}>{car.length}</text>
            </svg>
        </div>
    )
}

export default ShoppingCar;