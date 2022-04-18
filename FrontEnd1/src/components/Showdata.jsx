import React, { useEffect, useState } from 'react'
 import axios from "axios"

export const Showdata = () => {

const [resident,setResident]=useState([])

useEffect(()=>{
    getData()
},[])

const getData=()=>{
    axios.get("http://localhost:4393/resident").then((res)=>{
        setResident(res.data)
        console.log(res.data);
    })
}

  return (
    <div>
      {resident.map((e)=>{
            return <div>{e.name}</div>
        })}
    </div>
  )
}
