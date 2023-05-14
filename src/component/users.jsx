import React from 'react';
import { useLoaderData } from 'react-router-dom';

const users = () => {

    const users=useLoaderData()

    return (
        <div>
            <h1>all users here {users.length}</h1>
            {
                users.map(user=><p key={user._id}>{user.name} : {user.email}</p> )
            }
        </div>
    );
};

export default users;