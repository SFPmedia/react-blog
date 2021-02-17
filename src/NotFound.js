import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Beklager</h2>
            <p>Denne side kan ikke findes</p>
            <Link to="/">Tilbage til forsiden...</Link>
        </div>
     );
}
 
export default NotFound;