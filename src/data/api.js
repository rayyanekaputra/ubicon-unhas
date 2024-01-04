'use client'
import React, {useState} from "react";

export function APIE(){
const [posts, setPosts] = useState([]);

    const callAPI = async () => {
        fetch(`https://ubi-api.onrender.com/photos`)
            .then((response) => response.json())
            .then((data) => {
            setPosts(data);
            })
            .catch((err) => {
            console.log(err.message);
            });
        }
    return posts;
}


   

