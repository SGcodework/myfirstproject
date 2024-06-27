import React from 'react'

export default function Home() {
    const userData = [
        {
          "id": 1,
          "name": "Alice Johnson",
          "email": "alice.johnson@example.com",
          "age": 28,
          "isActive": true
        },
        {
          "id": 2,
          "name": "Bob Smith",
          "email": "bob.smith@example.com",
          "age": 34,
          "isActive": false
        },
        {
          "id": 3,
          "name": "Carol Williams",
          "email": "carol.williams@example.com",
          "age": 25,
          "isActive": true
        },
        {
          "id": 4,
          "name": "David Brown",
          "email": "david.brown@example.com",
          "age": 45,
          "isActive": true
        },
        {
          "id": 5,
          "name": "Eve Davis",
          "email": "eve.davis@example.com",
          "age": 30,
          "isActive": false
        }
      ]
      console.log("userdata",userData);
    return (
        <div>     
            {
                userData.map((user)=>{
                    return(
                    <h1>
                        {user.name}
                    </h1>
                )})
            }  
        </div>
    )
}
