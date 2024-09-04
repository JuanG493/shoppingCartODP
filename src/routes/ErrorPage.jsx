
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Opps this route doesn't exist!</h1>
            <Link to={"/"}>Return to the Home page</Link >
        </div>
    )
}
export default ErrorPage;