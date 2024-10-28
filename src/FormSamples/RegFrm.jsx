import React from 'react'
import { useState } from 'react'
import './regfrm.css'
export default function RegFrm() {
  const [user, setUser] = useState({
    name: 'Ram Kumar',
    age: 25,
    gender: "Male",
    isMarried: true,
    country: 'India',
    bio : "Write somethink about Yourself"
  });

  function changeHandler(e) {
      const name = e.target.name
      // console.log(name);

      const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setUser({
        ...user,
        [name]:value
      })
      
  }
  return (
    <div>
      <table>
        <thead> </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{user.age}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{user.gender}</td>
          </tr>
          <tr>
            <td>Marital Status</td>
            <td>{user.isMarried ? "Married" : "Not Married"}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{user.country}</td>
          </tr>
          <tr>
            <td>Bio</td>
            <td>{user.bio}</td>
          </tr>
        </tbody>
      </table>

      <form action="">
        <input type="text" name="name" id="" placeholder='Fullname' value={user.name} onChange={changeHandler} />
        <input type="number" name="age" id="" placeholder='Age' value={user.age} onChange={changeHandler} />
        <div className="gender">
          <label htmlFor="male">
            <input type="radio" name="gender" id="male" value="Male" checked={user.gender == "Male"} onChange={changeHandler} />
            Male
          </label>
          <label htmlFor="female">
            <input type="radio" name="gender" id="female" value="Female" checked={user.gender == "Female"} onChange={changeHandler} />
            Female
          </label>
        </div>

        <label htmlFor="isMarried">
          <input type="checkbox" name="isMarried" id="isMarried" checked={user.isMarried} onChange={changeHandler} />
          Is Marreid
        </label>

        <div className='select-div'>
          <label htmlFor="country">Select Country</label>
          <select name="country" id="country" value={user.country} onChange={changeHandler}>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>

        <textarea name="bio" id="" cols='30' rows="5" placeholder='Write about You' value={user.bio} onChange={changeHandler}></textarea>
      </form>
    </div>
  )
}
