import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>React Bloggen</h1>
            <div className="links">
                <Link to="/">Hjem</Link>
                <Link to="/create">Ny Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;