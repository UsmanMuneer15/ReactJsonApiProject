import React, {useEffect, useState } from 'react'
import User from './components/User'
import AddUser from './AddUser';

import './App.css'

const App=()=> {
  const [users,setUsers]=useState([]);
  
  useEffect(()=>{
  fetchData();
  },[])

  const fetchData =async()=>{
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((data)=> setUsers(data))
    .catch((err)=>{
      console.log(err);
    })
  }

  const onAdd = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };



  console.log(users)

  return (
   <>
   <h1>React Using Json PlaceHolder</h1>
   <br></br>
   <AddUser onAdd={onAdd} />
   <div>
    {
      users.map((user)=>{
        <User 
        id={user.id} 
        key={user.id} 
        name={user.name} 
        email={user.email}
        onDelete={onDelete}
        />
      })
    }
   </div>
   </>
  )
}

export default App
