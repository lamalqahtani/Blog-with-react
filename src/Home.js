// import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/posts');
    return ( 
        <div className='center'>
            <h1>All Posts!</h1>
            <button><Link to='/post/create'> New Post</Link></button>
            {error && <div>{error}</div>}
            {isPending && <img className='loading' alt='loading...' src={process.env.PUBLIC_URL+'/loading.gif'}/>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
     );
}

export default Home;