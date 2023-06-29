import React, { useEffect, useState } from "react";
import ShowTable from "./ShowTable";
import { useContext } from "react";
import { AppContext } from "../Context";

const FetchData = () => {
    const [data, setData] = useContext(AppContext);
    function getData(){
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => setData(json));
    }

    // console.log(data);

    useEffect(()=>getData,[]);

    return <div>
        <ShowTable/>
    </div>;
};

export default FetchData;
