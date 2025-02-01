'use client'

import { useState, useEffect } from "react"

async function GetUser() {
  const response = await fetch("https://678dadbfa64c82aeb11dab32.mockapi.io/api/pages/users")
  if(!response.ok){
    throw new Error("Cannot Fetch")
  }
  return response.json()
}
function Page() {
  const inituser = async ()=>{
    try {
        const result = await GetUser()
        setUserData(result)
    }
    catch(err){
        console.log("error")
    }
  }
  const [userData , setUserData] = useState([]);
  useEffect(()=>{
    console.log("use Effect !");
    
    inituser()
   
  }, [])
  return (
    <div >
        <h1 style={{color:"black"}}>Hello World this is Page 2</h1>
        {userData.map((data , key) =>(
          <div className='card-container' key={key}>
            <p style={{color:"black"}}>Name : {data.name}</p>
          </div>
        ))}
    </div>
  )
}

export default Page