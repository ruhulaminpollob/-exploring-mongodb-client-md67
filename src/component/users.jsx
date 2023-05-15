import React from 'react';
import { useLoaderData } from 'react-router-dom';

const users = () => {

    const users=useLoaderData()

    const handleDelete=_id=>{
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method:"DELETE"
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.deletedCount > 0) {
                alert("deleted successfully")
            }
        })
    }

    return (
        <div>
            <h1>all users here {users.length}</h1>
            {
                users.map(user=><p key={user._id}>{user.name} : {user.email} {user._id} <button onClick={()=>handleDelete(user._id)}>X</button> </p> )
            }
        </div>
    );
};

export default users;