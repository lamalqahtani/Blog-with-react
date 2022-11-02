function BlogList(props){
    const blogs = props.blogs;
    // const handleDelete = props.handleDelete;
    return ( 
        <>
        {blogs.map((blog)=>
            <div key={blog.id}>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <p> <em>{blog.author}</em></p>
                {/* <button onClick={()=>handleDelete(blog.id)}>delete blog</button> */}
            </div>)}
        </>
     );
}
 
export default BlogList;