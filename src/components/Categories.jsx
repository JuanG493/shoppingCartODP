
//mostrar categorias dentro del segmento especifico 

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Request from "../util/getRequest";
import CardWhitImg from "./Card";

const token = import.meta.env.VITE_API_TOKEN;



let nextId = 0;
const Categories = () => {
    const { state: info } = useLocation();
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getInfo = async (titleCat) => {
            try {
                const responses = await Promise.all(titleCat.map(async elm => {
                    let formatElm = elm.replace("-", "+")
                    const url = `https://pixabay.com/api/?key=${token}&per_page=5&safesearch=true&q=${formatElm}&category=fashion`
                    const response = await Request(url)
                    response['nameCategory'] = elm;
                    return response;
                }))
                return responses;
            } catch (err) {
                setError(err.message);
                setCategories([]);
            } finally {
                setLoading(false);
            }
        }

        getInfo(info).then(res => {
            setCategories(res)
        });
    }, [info])

    return (
        <div key={nextId++}>

            {loading && <h1>cargando...</h1>}
            {error && <div>{error}</div>}
            {categories && categories.map(elm => {

                let num = Math.floor(Math.random() * elm.hits.length)
                let link = elm.hits[num].largeImageURL;
                return (
                    <CardWhitImg
                        key={elm.nameCategory}
                        to={"products"}
                        srcImg={link}
                        name={elm.nameCategory}
                        info={elm}
                    >
                    </CardWhitImg>
                )
            })}
        </div>
    )
}

export default Categories;
