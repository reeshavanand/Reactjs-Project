
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
   const { data:blogg, isPending, error } = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">

           { error && <div>{error}</div> }
           { isPending && <div>Loading...</div> }
           { blogg && <BlogList blogs = {blogg} title = {" All Insight Blogs!"} /> }
           
        </div>
     );
}
 
export default Home;

