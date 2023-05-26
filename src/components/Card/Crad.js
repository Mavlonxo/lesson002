import React from "react";
import "./Card.css"; // import the CSS file
import {AiOutlineHeart} from "react-icons/ai"
const items = [
  { id: 1, name: "Телевизор Samsung 43-45 Android 11 Год Выпуска 2023", location: "Ташкент, Шайхантахурский район 7 май", price: "230 000 сум",  image: "https://frankfurt.apollo.olxcdn.com/v1/files/7x4k33oynxry-UZ/image;s=644x461" },
  { id: 2, name: "Нардалар сотилади янги", location: "Ургенч-Вчера 22:22", price: "150 000 сум", image: "https://frankfurt.apollo.olxcdn.com/v1/files/xxpytax5chaa3-UZ/image;s=644x461" },
  { id: 3, name: "Дезинфекция дезинфекция клапа Dezinfeksiya dizenfeksiya", location:"Tашкент, Мирабадский район 7 май", price: "100 000 сум", image: "https://frankfurt.apollo.olxcdn.com/v1/files/oho9j01cinvg3-UZ/image;s=644x461" },
  { id: 4, name: "Комфортный большой диван Фабричное качества", location:"Ташкент, Чиланзарский район 7 май", price: "10 500 000 сум", image: "https://frankfurt.apollo.olxcdn.com/v1/files/npojpbsuhivx-UZ/image;s=644x461" },
  { id: 1, name: "Canon 725 Тонер-картридж Оригинал новые доставка по узб", location:"Ташкент, Чиланзарский район 8 май", price: "366 192 сум", image: "https://frankfurt.apollo.olxcdn.com/v1/files/e2vgvsttsn3o1-UZ/image;s=644x461" },
  { id: 2, name: "Labo Refrigerator sotiladi Holati aloo 2022-yil", location:"Ташкент, Сергелийский район 8 май", price: "143 043 750 сум", image: "https://frankfurt.apollo.olxcdn.com/v1/files/ubsg5mmjbu6m-UZ/image;s=644x461" },
  { id: 3, name: "Продам Hyundai Tucson High-tech 2022 год состояние новое 12.300 км !", location:"Ташкент, Алмазарский район 8 май", price: "423 409 500 сум", image: "https://frankfurt.apollo.olxcdn.com/v1/files/s6pjh0u0len51-UZ/image;s=644x461" },
  { id: 4, name: "Stol stul 750000 so‘m", price: "750 000 сум", location:"Ургенч Вчера 07:48", image: "https://frankfurt.apollo.olxcdn.com/v1/files/es5ldu2f2dsi1-UZ/image;s=644x461" },
  { id: 1, name: "Телевизор Samsung 43-45 Android 11 Год Выпуска 2023", location: "Ташкент, Шайхантахурский район 7 май", price: "230 000 сум",  image: "https://frankfurt.apollo.olxcdn.com/v1/files/7x4k33oynxry-UZ/image;s=644x461" },
  { id: 2, name: "Нардалар сотилади янги", location: "Ургенч-Вчера 22:22", price: "150 000 сум", image: "https://frankfurt.apollo.olxcdn.com/v1/files/xxpytax5chaa3-UZ/image;s=644x461" },
  { id: 3, name: "Дезинфекция дезинфекция клапа Dezinfeksiya dizenfeksiya", location:"Tашкент, Мирабадский район 7 май", price: "100 000 сум", image: "https://frankfurt.apollo.olxcdn.com/v1/files/oho9j01cinvg3-UZ/image;s=644x461" },
  { id: 4, name: "Комфортный большой диван Фабричное качества", location:"Ташкент, Чиланзарский район 7 май", price: "10 500 000 сум", image: "https://frankfurt.apollo.olxcdn.com/v1/files/npojpbsuhivx-UZ/image;s=644x461" },
  { id: 1, name: "Canon 725 Тонер-картридж Оригинал новые доставка по узб", location:"Ташкент, Чиланзарский район 8 май", price: "366 192 сум", image: "https://frankfurt.apollo.olxcdn.com/v1/files/e2vgvsttsn3o1-UZ/image;s=644x461" },
  { id: 2, name: "Labo Refrigerator sotiladi Holati aloo 2022-yil", location:"Ташкент, Сергелийский район 8 май", price: "143 043 750 сум", image: "https://frankfurt.apollo.olxcdn.com/v1/files/ubsg5mmjbu6m-UZ/image;s=644x461" },
  { id: 3, name: "Продам Hyundai Tucson High-tech 2022 год состояние новое 12.300 км !", location:"Ташкент, Алмазарский район 8 май", price: "423 409 500 сум", image: "https://frankfurt.apollo.olxcdn.com/v1/files/s6pjh0u0len51-UZ/image;s=644x461" },
  { id: 4, name: "Stol stul 750000 so‘m", price: "750 000 сум", location:"Ургенч Вчера 07:48", image: "https://frankfurt.apollo.olxcdn.com/v1/files/es5ldu2f2dsi1-UZ/image;s=644x461" }
];

function Card() {
  return (
    <>
    <h1>Премиум объявления</h1>
    <div className="card-container">
      {items.map(item => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <h4>{item.location}</h4>
          <p className="price">{item.price}</p>
          <AiOutlineHeart className="heart"/>
        </div>
      ))}
    </div>
    </>

  );
}

export default Card;
