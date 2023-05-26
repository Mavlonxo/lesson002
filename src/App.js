import React from 'react'
import Main from './components/Main/Main'
import Imp from './components/imprortant category/Imp'
import Olx from './components/Before_footer/Olx'
import pp from './assets/pp.jfif'
import aa from './assets/aa.jpg'
import OlexCard from './components/Card/Crad'
import diag from './assets/diagram.jpg'
import Foot from './assets/footer img.jpg'
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Main/>
      <Imp url={pp} url2={aa} url3={aa} url4={aa} url5={aa} url6={aa} url7={aa}/>
      <OlexCard/>
      <Olx url9={diag} h1={"Начните бизнес в интернете с OLX!"} title={"oLx"} write={"Разделы на сервисе OLX: Детский мир, Недвижимость, Транспорт, Работа, Животные, Дом и сад, Электроника, Бизнес и услуги, Мода и стиль, Хобби, отдых и спорт, Отдам даром, Обме"} Foot={Foot} big_title={"Cервис объявлений № 1 в УзбекистанеЧастные объявления Узбекистана на OLX (бывший torg.uz) - здесь вы найдете то, что искали.Нажав на кнопку Подать объявление, вы сможете разместить онлайн-объявление на любую необходимую тематику - поиск работы, услуги, продажа автомобилей, недвижимости, электроники и многое другое.С помощью сервиса OLX в Узбекистане вы можете найти, продать или купить практически все, что угодно. Воспользовавшись функцией поиска, вы без труда найдете уже опубликованные объявления интересующей вас тематики.OLX в Узбекистане - ваш надежный и незаменимый помощник."} />
      <Footer w1={"Мобильные приложения"} w2={"Помощь"} w3={"Платные услуги"} w4={"Бизнес на OLX"} w5={"Реклама на сайте"} w6={"Условия использования"} w7={"Политика"} w111={""} w8={"Как продавать и покупать?"} w9={"Правила безопасности"} w10={"Карта сайта"} w11={"Карта регионов"} w12={"Карьера в OLX"}/>
    </div>
  )
}

export default App