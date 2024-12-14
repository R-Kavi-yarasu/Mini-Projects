import React, { useEffect, useState } from 'react'
import './Clock.css'

export default function Clock() {
  const [currentTime,setCurrentTime] = useState(new Date());
  useEffect(()=>{
    const timer = setInterval(()=>{
      setCurrentTime(new Date()); 
    },1000)
    return () => clearInterval(timer);
  },[])

  function formatHour(hour){
    return hour === 0 ? 12 : hour >12 ? hour -12 : hour
  }

  function formatTimeWithZero(num){
    return num <10 ? `0${num}` : num
  }

  function formateDate(date){
    const option = {weekday : "long" , year : "numeric" , month : "long" , day : "numeric" }
    return date.toLocaleDateString(undefined , option)
  };

  return (
    <div>
      <div className="digital-clock">
        <h1>Digital Clock</h1>
        <div className="time">
          {formatTimeWithZero(formatHour(currentTime.getHours()))} :
          {formatTimeWithZero(currentTime.getMinutes())} :
          {formatTimeWithZero(currentTime.getSeconds())} 
          {currentTime.getHours()>=12 ? " PM" : " AM"}
          
          </div>
        <div className="date">{formateDate(currentTime)}</div>
      </div>
    </div>
  )
}
