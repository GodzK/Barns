import React from 'react'
async function GetUser() {
  const response = await fetch("https://678dadbfa64c82aeb11dab32.mockapi.io/api/pages/users")
  if(!response.ok){
    throw new Error("Cannot Fetch")
  }
  return response.json()
}
async function page() {
  const user = await GetUser()
  return (
    <div >
        <h1 style={{color:"black"}}>Hello World this is Page 2</h1>
        {user.map((data , key) =>(
          <div className='card-container' key={key}>
            <p style={{color:"black"}}>Name : {data.name}</p>
          </div>
        ))}
    </div>
  )
}

export default page