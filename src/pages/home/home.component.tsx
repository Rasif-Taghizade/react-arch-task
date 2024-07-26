import { Link } from "react-router-dom";

const HomeComponent = () => {
    return (
        <div>
            <h1>Home page</h1>
            <p>Welcome to the home page</p>

            <ul>
                <li><Link to='/'>Home page</Link></li>
                <li><Link to='/workers'>Workers page</Link></li>
            </ul>
        </div>
    )
}

export default HomeComponent;