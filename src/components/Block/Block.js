import React from 'react'
import './Block.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import {GrLocation} from"react-icons/gr"
function Block() {
  return (
    <div className='Block'>
        <div className="block__nav">
            <h6>Telefon raqamidan foydalangan holda mobil ilova orqali OLX da qanday ro‘yxatdan o‘tish mumkin?</h6>
            <h2>Batafsil ma‘lumot</h2>
            <AiOutlineCloseCircle className='nav__icon'/>
        </div>
        <div className="block__input">
            <AiOutlineSearch className='input__icon'/>
            <input type="text" placeholder='1 142 512 nearby updates' />
            <button className='locat'><GrLocation/> &nbsp; &nbsp; &nbsp; All Uzbekistan</button>
            <button className='search'>Search &nbsp; <AiOutlineSearch/></button>
        </div>
    </div>
  )
}

export default Block