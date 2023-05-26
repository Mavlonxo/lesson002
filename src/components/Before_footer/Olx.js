import React from 'react'
import "./Olx.css"
function Olx(props) {
  console.log(props);
  return (
    <>
    <div className='start__businness'>
      <div style={{background: `url9(${props?.url9})wid  no-repeat center/cover`}} 
      className="start__businness__img">
        <img src={props?.url9} width={100} className='start__businness__image' alt="" />
    <h1>{props?.h1}</h1>
    <div className="btn__div">
    <button>Подробнее</button>
    </div>
      </div>
    </div>
        <div className="OLX">
        <h1>{props?.title}</h1>
        <h5>{props?.big_title}</h5>
      </div>
      <img className='iimmgg' src={props?.Foot} alt="" />
      <h6>{props?.write}</h6>
      <hr />
      </>
  )
}

export default Olx