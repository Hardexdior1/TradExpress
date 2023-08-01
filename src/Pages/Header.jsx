import React from 'react'
import img9 from '../Images/profile 1.png'
import img12 from '../Images/Notification.png'

const Header = () => {
  return (
    <div>
          <div className="dash">
<h2>Dashboard</h2>


<div className="selectIcon">
<select name="" id="">
  <option value="Nanny's Shop">Nanny's Shop</option>
  <option value="Granny's Shop">Granny's Shop</option>
  <option value="AndSoOn SHop">AndSoOn's Shop</option>


</select>
<span className="icon">
  <img src={img12} alt='icon' />
  <img src={img9} alt='icon' />


</span>


</div>

</div>
    </div>
  )
}

export default Header