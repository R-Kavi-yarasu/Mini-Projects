import React, { useEffect, useState } from 'react'
import "./Quize.css"
import questionData from './Question.json'
export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, sethowScore] = useState(false)
  const [timer, setTimer] = useState(10)

  const handleAnswerClick = (selectedOption) =>{
    if(selectedOption === questionData[currentQuestion].correctOption){
      setScore((prevScore) => prevScore + 1)
    }
    if(currentQuestion < questionData.length -1){
      setCurrentQuestion ((prevQuestion) => prevQuestion + 1 )
      setTimer(10)
    }
    else{
      sethowScore(true)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    sethowScore(false)
    setTimer(10)
  }

  useEffect(()=>{
    let interval;
    if(timer>0 && !showScore){
      interval = setInterval(() => {
        setTimer((prevTimer)=>prevTimer -1)
      }, 1000);
    }else{
      clearInterval(interval)
      sethowScore(true)
    } 
    return () => clearInterval(interval)
  },[timer,showScore])
  return (
    <div className='qiuz-app'>
      {showScore ? (
        <div className="score-section">
          <h2>Your Score is : {score}/{questionData.length}</h2>
          <button onClick={handleRestartQuiz}>Restart</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questionData[currentQuestion].question}</p>
          <div className="option">
            {
              questionData[currentQuestion].option.map((option,index)=>(
                <button key={index} 
                onClick={()=>{handleAnswerClick(option)}}
                >{option}</button>
              ))}
          </div>
          <div className="timer">
            Time left:
            <span>{timer}s</span>
          </div>
        </div>
      )
      }
    </div>
  )
}
