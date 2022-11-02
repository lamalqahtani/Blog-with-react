import {useEffect, useState} from 'react';
import BlogList from './BlogList';

//Home component 2ed implementation.
//this is another way to send a loading message when the data is not ready yet.
function Home() {

    //blogs data
    // [
    //     { id: 1, title: "My Fist Blog! ", description: "Hello guys, It is my first blog here...", author:"dev"},
    //     { id: 2, title: "Javascript is the best", description: "Javascript is the best, cuz I am a JS Developer", author:"dev"},
    //     { id: 3, title: "Hello ", description:"Nice to meet you guys", author:"user1"},
    //     { id: 4, title: "Blog is great, woow!", description: "I like this blog!", author:"user2"},
    // ]
    const [blogs,setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true);

    const handleDelete = (id)=>{
        let filteredBlogs = blogs.filter((blog)=> blog.id !== id);
        setBlogs(filteredBlogs);
    }
    useEffect(()=>{
        fetch(' http://localhost:8000/posts')
        .then(res=>res.json())
        .then(data=>{
            setIsPending(false);
            setBlogs(data);
        });
    },[]);
    return ( 
        <>
        <h1>Home Component Content</h1>
        {isPending && <p>Loading...</p>}
        {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} />}
        </>
     );
}

export default Home;