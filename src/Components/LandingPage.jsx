import React, { useRef, useState } from 'react'
import Section1 from '../Components/Section1'
import Section2 from '../Components/Section2'

import Section4 from '../Components/Section4'


import { Link } from 'react-router-dom'

const LandingPage = ({change,change2,}) => {

   
  return (
    <div>

<Section1 />
<Section2 />
<Section4 change={change} change2={change2}/>



{/* <Link to='./Collections'>Collections</Link> */}
    </div>
  )
}

export default LandingPage