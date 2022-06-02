
const Results=(props)=>{

    return(
        <div className="startPlaceholder">
        <h1>All Done!</h1>
        <p>Your Final Score is {props.finalScore}</p>
        <p>Enter Initials</p>
        <button className="startQ" onClick={props.onclick}>Submit</button>

      </div>
    );

   
}

export default Results;