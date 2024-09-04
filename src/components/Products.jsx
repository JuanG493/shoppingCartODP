
//mostrar categorias dentro de la categoria especifica

import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Request from "../util/getRequest";
import CardWhitImg from "./Card";
import styles from "./Products.module.css";

const Products = () => {
    const { state: info } = useLocation();
    // console.log(info);

    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //get the products
    useEffect(() => {
        const getInfo = async (name) => {
            try {
                const url = `https://dummyjson.com/products/category/${name}`
                const response = await Request(url)
                const format = response.products
                return format;
            } catch (err) {
                setError(err.message);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        }
        getInfo(info.nameCategory).then(res => {
            setProducts(res)
        });
    }, [])

    return (
        <div>
            <header className={styles.title}>
                <h1>{info.nameCategory}</h1>
            </header>

            <div className={styles.container}>
                {loading && <h1>cargando...</h1>}
                {error && <div>{error}</div>}
                {products && products.map((product, index) => {
                    let link = product.thumbnail;
                    return (
                        <CardWhitImg
                            key={index}
                            to={"product"}
                            srcImg={link}
                            name={product.title}
                            info={product}
                            >
                            
                        </CardWhitImg>
                    )
                })}
            </div>
        </div>
    )

}
Products.propTypes = {
    link: PropTypes.string
}

export default Products;

//mostrar productos dentro de la categoria especifica