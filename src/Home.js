import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs");

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isLoading && <div>Indlæser...</div>}
            {blogs && <BlogList blogs={ blogs } title="Alle blogge"/>}
        </div>
     );
}
 
export default Home;