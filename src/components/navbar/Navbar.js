import React, {useState, useEffect} from 'react'
import './Navbar.css'
function Navbar(p) {
    const [show, setShow] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null);
    console.log(selectedItem);
    const controlNavbar = () => {
        if (window.scrollY > 250 ) {
            setShow(true)
        }else{
          setShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
    console.log(p.data);
  return (
    <div id="header-container" >
         <div className='OLX__nav'  style={!show ?{display: 'flex'}: {display: 'none' } }>
            
         <span class="olx-website-rebranded__o"></span>
         <span class="olx-website-rebranded__l"></span>
        <h1 className='x'>x</h1>
             <div className="right">
             {
                   p?.data?.map((item, inx)=> <h3 className='nav__item' key={inx}>{item}</h3>)
              }
             </div>
         <button className='nav__button'>Submit Updates</button>
     </div>
    </div>


   
  )
}

export default Navbar