import React from 'react'
import './Catogory.js'
function Imp(props) {
    console.log(props);
  return (
    <>
    <div className="all">
    <div className='imp'>
        {/* first */}
        <h1 className='h1'>Main Categories</h1>
        <div style={{background: `url(${props?.url})wid  no-repeat center/cover`}} className='first'>
        <img src={props?.url} width={100} className='first_1' alt="" />
        <h1>Детский мир</h1>
        </div>
    {/* second */}
        <div style={{background: `url2;(${props?.url2})wid  no-repeat center/cover`}} className='second'>
        <img src={props?.url2} width={100} className='second_2' alt="" />
        <h1>Недвижимость</h1>
        </div>
{/* third */}
        <div style={{background: `url3;(${props?.url3})wid  no-repeat center/cover`}} className='third'>
        <img src={props?.url3} width={100} className='third_3' alt="" />
        <h1>Транспорт</h1>
        </div>

{/* fourth */}
        <div style={{background: `url4;(${props?.url4})wid  no-repeat center/cover`}} className='fourth'>
        <img src={props?.url4} width={100} className='fourth_4' alt="" />
        <h1>Работа</h1>
        </div>
{/* fifth */}

        <div style={{background: `url5;(${props?.url5})wid  no-repeat center/cover`}} className='fifth'>
        <img src={props?.url5} width={100} className='fifth_5' alt="" />
        <h1>Животные</h1>
        </div>

{/* sixth */}
        <div style={{background: `url6;(${props?.url6})wid  no-repeat center/cover`}} className='sixth'>
        <img src={props?.url6} width={100} className='sixth_6' alt="" />
        <h1>Дом и сад</h1>
        </div>

{/* seventh */}
        <div style={{background: `url7;(${props?.url7})wid  no-repeat center/cover`}} className='seventh'>
        <img src={props?.url7} width={100} className='seventh_7' alt="" />
        <h1>Электроника</h1>
        </div>
    </div>
    <br />
    <div className='imp2'>
        {/* eights */}
        <div style={{background: `url(${props?.url})wid  no-repeat center/cover`}} className='eith'>
        <img src={props?.url} width={100} className='eith_8' alt="" />
        <h1>Бизнес и услуги</h1>
        </div>
    {/* ninth */}
        <div style={{background: `url2;(${props?.url2})wid  no-repeat center/cover`}} className='second'>
        <img src={props?.url2} width={100} className='second_2' alt="" />
        <h1>Мода и стиль</h1>
        </div>
{/* tenth */}
        <div style={{background: `url3;(${props?.url3})wid  no-repeat center/cover`}} className='third'>
        <img src={props?.url3} width={100} className='third_3' alt="" />
        <h1>Хобби, отдых и спорт</h1>
        </div>

{/* eleventh */}
        <div style={{background: `url4;(${props?.url4})wid  no-repeat center/cover`}} className='fourth'>
        <img src={props?.url4} width={100} className='fourth_4' alt="" />
        <h1>Отдам даром</h1>
        </div>
{/* tvelveth */}

        <div style={{background: `url5;(${props?.url5})wid  no-repeat center/cover`}} className='fifth'>
        <img src={props?.url5} width={100} className='fifth_5' alt="" />
        <h1>Обмен</h1>
        </div>
    </div>
    </div>
    
    </>

  )
}

export default Imp