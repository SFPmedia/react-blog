import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch("http://localhost:8000/blogs/" + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()=> {
            history.push('/')
        })
    }

    return ( 
        <div className="blog-details">
            { isLoading && <div>Indlæser...</div> }
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Skrevet af { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>Slet</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;