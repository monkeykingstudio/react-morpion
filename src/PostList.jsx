import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:4000/companies'
            );  
        setData(result.data);
        };
        fetchData();  
    },[]);

    // useEffect(() => {
    //     axios
    //       .get("http://localhost:4000/companies")
    //       .then(result => setData(result.data));
    //   }, []);
     
   
    return (
        <div className="post-list">
            <ul>
                {data.map(item => (
                <li key={item.id}>
                <span>{item.name}</span>
                </li>
                ))}
            </ul>   
        </div>
    );
};

export default PostList;