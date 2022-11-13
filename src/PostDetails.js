import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const PostDetails = () => {
    const {id} = useParams();
    const {data,isPending,error} = useFetch(`http://localhost:8000/posts/${id}`);
    const navigate = useNavigate();
    const handleDelete = (id)=>{
        fetch(`http://localhost:8000/posts/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            navigate('/');
        })
        .catch(err=>console.log(err));
    }
    return ( 
    <div className='center'>
        <h2>Hello from post details</h2>
        {error && <div>{error}</div>}
        {isPending && <img className="loading" alt='loading...' src={process.env.PUBLIC_URL+'/loading.gif'}/>}
        {data && 
            <div>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <p><em>{data.author}</em></p>
                <button onClick={()=> handleDelete(data.id)}>Delete post</button>
            </div>
        }
    </div>
     );
}
 
export default PostDetails;