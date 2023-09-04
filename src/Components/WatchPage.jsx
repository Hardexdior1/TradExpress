import React, { useState } from 'react'
import Watches from './Watches'
import Data2 from './Data2'
import '../Styles/Section4.css'




const WatchPage = () => {
  const [data,setData]=useState(Data2)

  const [productLength,setProductLength]=useState(Data2.length + ' Watches Available ')


  const all=()=>{
   
    setData(Data2)
    setProductLength(Data2.length + ' Watches Available ')
  }
  const sport=()=>{
    let sport=Data2.filter((item)=>item.category=='sport')
    setData(sport)
    setProductLength(sport.length + ' Watches found ')
  }
  const summer=()=>{
    let summer=Data2.filter((item)=>item.category=='summer')
    setProductLength(summer.length + ' Watches found ')

    setData(summer)
  }
  const event=()=>{
    let event=Data2.filter((item)=>item.category=='event')
    setProductLength(event.length + ' Watches found ')

    setData(event)
  }
 

  return (
    <div>
     
      <div className='watchPad'>
     <div className="categoryAndLengthWrap">
      <div>
      <h4>{productLength} </h4>

      </div>
     <div className="categoryWrap">

<button onClick={all} className="btn btn1">All</button>
<button onClick={sport} className="btn btn2 ">Sport</button>
<button onClick={summer} className="btn btn3 ">Summer</button>
<button onClick={event} className="btn btn4 ">Event</button>




</div>
     </div>
 
      <div className='watchFlex watchFlex1'>
      {/* <h1>{data.length}</h1> */}





{data.map((eachData)=>{

  return <Watches key={eachData.di} {...eachData} />
})}
    </div>
    </div>
    </div>
  )
}

export default WatchPage