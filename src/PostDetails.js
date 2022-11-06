import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const PostDetails = () => {
    const {id} = useParams();
    const {data,isPending,error} = useFetch(`http://localhost:8000/posts/${id}`);
    return ( 
    <div className='center'>
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
    </div>
     );
}
 
export default PostDetails;