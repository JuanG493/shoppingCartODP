//show the segment target and redirect to the especific categories
//acording of the segment(womens - mens)

import { Link } from "react-router-dom";
import listCategories from "../util/listCategories";
const Segment = () => {


    return (
        <>
            <header>
                <h1>Store</h1>
            </header>
            <main>
                {listCategories.map(cat => (
                    <div key={cat.id}>
                        <h4>{cat.title}</h4>
                        <img alt={cat.title + "_img"}></img>
                        <button>
                            <Link
                                to={"categories/" + cat.title}
                                state={cat.subCategories}>
                                Click !</Link>
                        </button>
                    </div>
                )
                )}

            </main>
        </>
    )
}

export default Segment;