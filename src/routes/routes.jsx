import App from "../components/App";
import Categories from "../components/Categories";
import Home from "../components/Home";
import Payment from "../components/Payment";
import Product from "../components/Product";
import Products from "../components/Products";
import ErrorPage from "./ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/payment",
                element: <Payment />,
            },
            {
                path: "categories/:name",
                element: <Categories />,
            },
            {
                path: "categories/:name/:name",
                element: <Products></Products>,
            },
            {
                path: "categories/:name/:name/:name",
                element: <Product></Product>,
            },
            {
                path: "categories/:name/:name/:name/:name",
                element: <Product></Product>,
            }
        ]
    },
]

export default routes;