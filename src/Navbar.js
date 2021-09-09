import {Link} from 'react-router-dom';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Mind Blogging 😏</h1>
            <div className="links">
                <Link to = "/">Home</Link>
                <Link to = "/NewBlog">New Blog</Link>
            </div>
        </nav>
    
     );
}
 
export default Navbar;