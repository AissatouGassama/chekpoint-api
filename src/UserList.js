import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {

    const [datas, setDatas] = useState([]);

    async function fetchData(){
    try {
        const result= await axios('https://jsonplaceholder.typicode.com/users')
        const data = result.data
        setDatas(data);
        
    } catch (error) {
        console.log(error)
    }
        
        
    }

    useEffect(()=>{
     fetchData();

    },[])
    console.log(datas)
    return (
        <div>
    
     
    
    <ul>
        {datas.map((item)=>(
            <li key={item.id}>
                {item.name}
            </li>
        ))}
    </ul>
        </div>
    )

};
export default UserList;



