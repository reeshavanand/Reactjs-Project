import { useParams,useHistory } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {

    const {id} = useParams()
    const {data:blogg, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/' + blogg.id,{
            method:'DELETE'
        }).then(() =>{
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogg && (
                <article>
                    <h2>{blogg.title}</h2>
                    <p>Written by {blogg.author}</p>
                    <div>{blogg.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
           
        </div>
     );
}
 
export default BlogDetails;