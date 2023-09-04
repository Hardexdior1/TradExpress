import React, { useState } from "react";
import '../Styles/LandingPage.css'

import sales from '../Images/icon.png'

import roundLogo from '../Images/Group 2.png'

import cartLogo from '../Images/Bag.png'


import goods from "./GoodsStatus";


import bottom from '../Images/bottom.png'

const LandingPage = () => {
  
  const [receivedGoods,setReceivedGoods]=useState(goods)


  // const checkPending=receivedGoods.filter((item)=item.pending==true)
  // console.log(checkPending);

  const pendingLength=goods.filter((e)=>e.pending==true)

  const completedLength=goods.filter((e)=>e.completed==true)


  // console.log(newitems);

  const checkPending=(item)=>{
    const newItem=goods.filter((item)=>item.pending==true)
    setReceivedGoods(newItem)
  }

  const   checkCompleted=(item)=>{
    const newItemComplete=goods.filter((item2)=>item2.completed==true)
    setReceivedGoods(newItemComplete)
  }


  return (
    <div className="landinWrap">
      
<div className="wrap">
 
 <div className="threeWraps">

<div className="three">
<div className="flex1Wrap">
 <div className="flex1">
 <div className="test">

<img src={sales} alt="icon" />

<select name="" id="">

  <option value="This Week">This Week</option>
  <option value="Last Week">last Week</option>
  <option value="This Month">This Month</option>


</select>



  </div>
  <div className="test">

  <div>
    <p>sales</p>
    <h4>4,000,000.00</h4>

  </div>

  <div>
    <p>volume</p>
    <h4>450 <small>+20.00%</small></h4>

  </div>
</div>





 </div>

 <div className="flex1">
 <div className="test test2">

{/* <img src={sales} alt="icon" /> */}
<h4>marketing</h4>

<select name="" id="">

  <option value="This Week">This Week</option>
  <option value="Last Week">last Week</option>
  <option value="This Month">This Month</option>


</select>


  </div>
  <div className="test">

  <div>
    {/* <p>sales</p>
    <h4>4,000,000.00</h4> */}

    {/* <button className="btn1"></button><span>Acquisition</span> */}

    <li className="li1"><span>Acquisition</span></li>

  </div>

  <div>
    {/* <p>sales</p>
    <h4>4,000,000.00</h4> */}

    {/* <button className="btn2"></button><span>Purchase</span> */}

    <li className="li2"><span>Purchase</span></li>

  </div>

  <div>
    {/* <p>sales</p>
    <h4>4,000,000.00</h4> */}

    {/* <button className="btn3"></button><span>Retention</span> */}
    <li className="li3"><span>Retention</span></li>

  </div>
</div>



<img className="roundLogo" src={roundLogo} alt="" />

 </div>
 </div>


 <div className="flex1Wrap">
 <div className="flex1">
 <div className="test">

<img src={sales} alt="icon" />

<select name="" id="">

  <option value="This Week">This Week</option>
  <option value="Last Week">last Week</option>
  <option value="This Month">This Month</option>


</select>



  </div>
  <div className="test">

  <div>
    <p>Customers</p>
    <h4>1,250 <small>+15.80</small></h4>

  </div>

  <div>
    <p>Active</p>
    <h4>1,180 <small>+85%</small></h4>

  </div>
</div>





 </div>

 <div className="flex1 testBlue">
 <div className="test">

<img src={ cartLogo} alt="icon" />

<select name="" id="">

  <option value="This Week">This Week</option>
  <option value="Last Week">last Week</option>
  <option value="This Month">This Month</option>


</select>



  </div>
  <div className="test testBlue">

  <div>
    <p >All product</p>
    <h4>45</h4>

  </div>

  <div>
    <p>Active</p>
    <h4>32 <span>+24%</span></h4>

  </div>
</div>



 </div>






 <div className="flex1">
 <div className="test">

<img src={sales} alt="icon" />

<select name="" id="">

  <option value="This Week">This Week</option>
  <option value="Last Week">last Week</option>
  <option value="This Month">This Month</option>


</select>



  </div>
  <div className="test">

  <div>
    <strong className="abandon">Abandoned cart </strong>
    <h4>20%  <small>+0.00</small></h4>

  </div>

  <div>
    <p>Customers</p>
    <h4>30</h4>

  </div>
</div>





 </div>











 </div>
</div>
<div className="chartImg">
  <img  src={bottom} alt="chart" />
</div>


  {/* na here i wan put am  */}
 </div>












 {/* <div className="flex1">
 <div className="test">

<img src={sales} alt="icon" />

<select name="" id="">

  <option value="This Week">This Week</option>
  <option value="Last Week">last Week</option>
  <option value="This Month">This Month</option>


</select>



  </div>
  <div className="test">

  <div>
    <p>Customers</p>
    <h4>1,250 <small>+15.80</small></h4>

  </div>

  <div>
    <p>Active</p>
    <h4>1,180 <small>85%</small></h4>

  </div>
</div>


<div className="test">

  <div>
    <p>sales</p>
    <h4>4,000,000.00</h4>

  </div>

  <div>
    <p>volume</p>
    <h4>450 <small>+20.00%</small></h4>

  </div>
</div>
 </div> */}

 
 

 <div className="flex1 flexWidth">
 <div className="test">

<img src={sales} alt="icon" />

<select name="" id="">

  <option value="This Week">This Week</option>
  <option value="Last Week">last Week</option>
  <option value="This Month">This Month</option>


</select>



  </div>




  

  
  <div className="test">

  <div>
    <p className="pendingCheck" onClick={()=>{
      setReceivedGoods(goods)
    }}>All Orders </p>
    <h4 className="pendingCheck">{goods.length}</h4>

  </div>

  <div>
    <p onClick={checkPending} className="pendingCheck">Pending</p>
    <h4 className="pendingCheck" >{pendingLength.length}</h4>

  </div>
  <div>
    <p onClick={checkCompleted} className="pendingCheck">completed</p>
    <h4>{completedLength.length}</h4>

  </div>












</div>








<div className="goodsWrap">
<h4>Recent Orders  </h4>

  {receivedGoods.map((eachGood)=>{
    const {img,price,pending,completed,date,name}=eachGood

    return <div key={eachGood.id} >

      <div className="goodFlex">
      <div className="imgAndText">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <small>{name} </small>
          <h4>{price}</h4>
        </div>


      </div>

      <div>
        <p>{date}</p>

        {pending? <button className="pending">pending</button>:<button className="completed">completed</button>}
      </div>
      </div>



    </div>
  })}
</div>


 </div>

 

  
  
  
  </div>      
      

    </div>
  );
};

export default LandingPage;
