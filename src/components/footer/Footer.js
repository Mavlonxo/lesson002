import React from 'react'
import './footer.css'
function Footer(props){
    console.log(props);
  return (
    <>
    <div className='Footer'>
        <div className="part__one">
            <h1>{props?.w1}</h1>
            <h1>{props?.w2}</h1>
            <h1>{props?.w3}</h1>
            <h1>{props?.w4}</h1>
            <h1>{props?.w5}</h1>
            <h1>{props?.w6}</h1>
            <h1>{props?.w7}</h1>
        </div>
    <div className="part__two">
            <h1>{props?.w8}</h1>
            <h1>{props?.w9}</h1>
            <h1>{props?.w10}</h1>
            <h1>{props?.w11}</h1>
            <h1>{props?.w12}</h1>
    </div>
    </div>
    </>
  )
}

export default Footer