import { useState } from "react";
import { useHistory } from 'react-router-dom';


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added");
            setIsLoading(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Tilføj en ny blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog titel:</label>
                <input type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog indhold:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog forfatter:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Irene">Irene</option>
                    <option value="Niels">Niels</option>
                    <option value="Bo">Bo</option>
                    <option value="Signe">Signe</option>
                    <option value="Rebecca">Rebecca</option>
                    <option value="Søren">Søren</option>
                </select>
               { !isLoading && <button>Tilføj Blog</button> }
               { isLoading && <button disabled>Tilføjer blog...</button> }
            </form>
        </div>
     );
}
 
export default Create;