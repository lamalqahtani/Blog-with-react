import useFetch from "./useFetch";

const PostDetails = () => {
    const {data,isPending,error} = useFetch('http://localhost:8000/posts/1');
    console.log(data);
    return ( 
    <>
        <h2>Hello from post details</h2>
        {error && <div>{error}</div>}
        {isPending && <img alt='loading...' src={process.env.PUBLIC_URL+'/loading.gif'}/>}
        {data && 
            <div>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <p><em>{data.author}</em></p>
            </div>
        }
    </>
     );
}
 
export default PostDetails;