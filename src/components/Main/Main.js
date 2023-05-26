import React from 'react'
import Navbar from '../navbar/Navbar'
import Block from '../Block/Block'
import {FiMessageSquare} from 'react-icons/fi'
import {BsFillSuitHeartFill} from 'react-icons/bs'
import {BsPersonFill} from "react-icons/bs"
const NAV = ["O'z | RU",  <FiMessageSquare style={{marginLeft:"60" , marginRight:"10"}}/> , "Message" , <BsFillSuitHeartFill  style=
{{marginLeft:"40" , marginRight:"90"}}/> ,<BsPersonFill  style={{marginRight:"15"}}/> , "Your profile" ] 

function Main() {
  return (
    <div>
        <Navbar data={NAV}/>
        <Block/>
    </div>
  )
}

export default Main