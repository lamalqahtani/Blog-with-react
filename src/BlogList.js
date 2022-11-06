import {Link} from 'react-router-dom';

function BlogList(props){
    const blogs = props.blogs;
    return ( 
        <div className="posts">
        {blogs.map((blog)=>
            <div className="post" key={blog.id}>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <p> <em>{blog.author}</em></p>
                <Link to={`/post/details/${blog.id}`}>Read more...</Link>
            </div>)}
        </div>
     );
}
 
export default BlogList;