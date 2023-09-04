import React, { useState } from 'react'
import testimonial2 from "../images/testimonial-4.jpg";
import '../Styles/QuestionAnswer.css'
const QandA = ({question,answer,}) => {
    const [showAnswer,setShowAnswer]=useState(false)
  return (
   <div>
     <div className="answerWrap">

<div>
   <div className="flexQuestionAndArrow " onClick={()=>{
    setShowAnswer(!showAnswer)
   }}>
<h4>{question}</h4>

{showAnswer?  <span> <b>{'x'}</b> </span> :<span> <b>{'>>'}</b> </span>}

   </div>

   {showAnswer? <p>{answer}</p>:''}

</div>




    </div>
     
   </div>
  )
}

export default QandA