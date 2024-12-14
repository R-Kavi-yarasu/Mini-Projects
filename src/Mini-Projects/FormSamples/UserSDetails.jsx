import React from 'react'
import { useState } from 'react'
export default function UserSDetails() {

  // const [userName, setUserName] = useState('kavi')
  // const [userAge, setUserAge] = useState(21)

  // const [user,setUser] = useState({name : 'Ram' , age : 21});

  // const updateUserName = () => {
  //   // setUserName("sam")
  //   // userName == "Ram" ? setUserName("Sam") : setUserName("Ram") ;

  //   setUser({
  //     ...user,
  //     name : "Sam"
  //   })
  // }
  // const updateUserAge = () => {
  //   // setUserAge(25)
  //   setUser({
  //     ...user,
  //     // userAge == 21 ? setUserAge(25) : setUserAge(21) ; 
  //     age : 25
  //   })
  // }

  const [user,setUser] = useState({fname : 'Ram' , lname:'Kumar',  age : 21 });

  function changeHandle(e){
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  // function changeName(e){
  //   // const newStateObject = {...user};
  //   // newStateObject.name = e.target.value;
  //   // setUser(newStateObject);

  //   setUser((oldstate)=> {
  //     return{...oldstate, name:e.target.value}
  //   })  
    
  // }
  // function changeAge(e){
  //   // const newStateObject = {...user};
  //   // newStateObject.age = e.target.value;
  //   // setUser(newStateObject);
  //   setUser((oldstate)=> {
  //     return{...oldstate, age:e.target.value}
  //   })  
  // }
  // const [name,setName] = useState("");
  return (
    <div>
      {/* <h1>User Details</h1>
      <h3>{user.name}</h3>
      <h3>{user.age}</h3>

      <button onClick={updateUserName} className='btn btn-dark'>Update UserName</button>
      <button onClick={updateUserAge} className='btn btn-dark'>Update UserAge</button> */}

      <h1>{user.fname} {user.lname},{user.age}</h1>

      <input type="text" id="" placeholder='Enter your Name' name='fname' value={user.fname} onChange={changeHandle}/>
      <input type="text" id="" placeholder='Enter your Name' name='lname' value={user.lname} onChange={changeHandle}/>
      <input type="text" id="" placeholder='Enter your Age'  name='age' value={user.age} onChange={changeHandle}/>

      {/* <h1>User Name is {user.name}</h1> */}
    </div>
  )
}
