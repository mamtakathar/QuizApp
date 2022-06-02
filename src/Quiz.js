import React, { useEffect, useState } from "react";
import Header from "./Header";
import './assets/script';
import { useNavigate } from 'react-router-dom';
import Questions from "./Questions";
import Start from "./Start";
import Results from './Results';

export default function Quiz(){
  const navigate= useNavigate();
  const [displayStart,setStart]= useState(true)
  const [displayQ, setDiplayQ]= useState(false)
  const [displayRes, setResult]= useState(false)
  const [finalScore,setFinalScore]=useState(0)
  const [seconds, setSeconds]= useState(20)
  const [start, setStartTime] = useState(false);
  const [score, setScore]= useState(0)

  let questions=null;
  let results= null;

  useEffect(()=>{

    if(start){
     
        const timer = seconds >0 && setTimeout(() => {
          setSeconds(seconds - 1);
        }, 1000);
      console.log(seconds)
      
      if (seconds <= 0) {
        setStartTime(false);
        endQuiz(finalScore)
      }
      return () => clearInterval(timer);
    }
   // return () => clearTimeout(timer);
  },[start,seconds])

  const startQuiz=(evt)=>{
    evt.preventDefault();
    setDiplayQ(true);
    setStart(false)
    setStartTime(true)
  }

  const onSetScore=()=>{
    setScore(score+1);
  }

  const onDeductTime=()=>{
    setTimeout(() => {
      setSeconds(seconds - 10);
    }, 1000);
  }
  const endQuiz=()=>{
    setDiplayQ(false)
    setResult(true)
    setSeconds(0);
    //setFinalScore(score)
  }

  const setTimer=()=>{
    if(seconds>0){
      setTimeout( ()=>setSeconds(seconds-1), 1000)
    }
    else{
      setSeconds(0)
      endQuiz()
    }
  }
  if(displayQ==true){
    questions=<Questions results={results} onSetScore={onSetScore} onDeductTime={onDeductTime} onSubmit={endQuiz}/>;
  }

  if(displayRes==true){
    results=<Results finalScore={score}/>
  }

  // ...



    return(
    <div>
          <Header timer={seconds}/>
      
          {displayStart && <Start onclick={startQuiz}/>}
          {displayQ && questions}
          {displayRes && results}
          
    </div>
    );

   
}