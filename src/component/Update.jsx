import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser=useLoaderData()
    return (
        <div>
            <h3>Update information of :{loadedUser.name}</h3>
        </div>
    );
};

export default Update;