
import { useState } from 'react';
import {questions} from './assets/script';
import Header from "./Header";
import Results from './Results';

export default function Questions(props){

    let finalScore=0;
    let results= props.results;

    const [inc, setIncrementor]= useState(0)
    const [score, setScore]= useState(0)

    const onAnswerClick=(evt)=>{

        if(evt.currentTarget.innerText==questions[inc].answer)
        props.onSetScore();
        else 
        props.onDeductTime();
        
        if(inc<questions.length)
        setIncrementor(inc+1);

        if(inc==questions.length-1) {

         props.onSubmit();
       // results=<Results finalScore={score}/>
        }
    }
    return(
   
      
          <div className="startPlaceholder">
            <div className="questionText">{questions[inc].questionText}</div>
            <div className="questionOptions">
                {questions[inc].options.map((item,index)=>{
                    return (
                    <div>
                        <button onClick={onAnswerClick} className="opt">{item}</button><br/><br/>
                    </div>
                    )
                })
                }
            
            </div>
          </div>
    );

   
}