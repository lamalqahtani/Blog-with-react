// import {useEffect, useState} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/posts');
    return ( 
        <>
            <h1>Home Component Content</h1>
            {error && <div>{error}</div>}
            {isPending && <p>Loading...</p>}
            {blogs && <BlogList blogs={blogs} />}
        </>
     );
}

export default Home;