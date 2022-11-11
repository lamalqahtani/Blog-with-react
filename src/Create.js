import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [author, setAuthor] = useState('user 1');
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data ={
            title,
            description,
            author
        }
        console.log(data);
        fetch('http://localhost:8000/posts',{
            method: 'POST',
            headers:{'content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(res=> res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err));
    }
    return ( 
        <div className="center">
            <h1>Create new Post</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label>Title</label>
                <input type='text' placeholder="insert a title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>Description </label>
                <textarea value={description} onChange={(e)=>setDescription(e.target.value)}/>
                <label>Author </label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option selected value="user 1">user 1</option>
                    <option value="user 2">user 2</option>
                    <option value="user 3">user 3</option>
                    <option value="dev">dev</option>
                </select>
                <button type="submit">submit</button>
                
            </form>
        </div>
     );
}
 
export default Create;