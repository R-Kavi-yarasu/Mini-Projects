import React from 'react';
// import './card.css';

const userData =[
  {
    name:'James',
    city:'New Yark',
    des: "Front-End Developer",
    skills:["UI/UX","frontend developer","HTML","CSS","JavaScript","React JS","Node Js"],
    online:true,
    profile:"Images/img-1.jfif",
  },
  {
    name:'Robert',
    city:'California',
    des: "Full Stack Web Developer",
    skills:["Vlogging","Web Development","HTML","CSS","JavaScript","React JS","Angular"],
    online:false,
    profile:"Images/img-2.jpg",
  },
  {
    name:'John',
    city:'San Frencisco',
    des: "Senior Software Developer",
    skills:["C","C++","Java Programming","Python","C#","MySQL","MongoDB"],
    online:true,
    profile:"Images/img-3.jfif",
  }
]

function User(props){
  return(
    <div className='card-container'>
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online? "ONLINE":"OFFLINE"}
      </span>
      <img className='img' src={props.profile} alt="" height={"120px"} width={"120x"}/>
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.des}</p>
      <div className='buttons'>
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
        <div className='skills'>
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill,index)=>(
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}



export default function UserCode() {
  return (
      // <User 
      // name="Kaviyarasu R" city="Coimbatore" des="Front-End Developer" skills={["UI/UX","frontend developer","HTML","CSS","JavaScript","React JS","Node Js"]} 
      // online={true} profile="Images/img-2.jpg" 
      // />   
      <>
        {
          userData.map((user,index)=>(

            <User key={index} name={user.name}
            city={user.city}
            des={user.des}
            online={user.online}
            profile={user.profile}
            skills={user.skills}
            />
          ))
        }
      </>
  )
}
 