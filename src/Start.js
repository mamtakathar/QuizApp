
import questions from './assets/script';
import Header from "./Header";


const Start=(props)=>{

    return(
        <div className="startPlaceholder">
        <h1>Coding Quiz Challenge</h1>
        <p> Try to answer the following code related questions within time limit</p>
        <p>Keep in mind incorrect answers will penalize your score/time by 10 seconds.</p>
        <button className="startQ" onClick={props.onclick}>Start Quiz</button>
      </div>
    );

   
}

export default Start;