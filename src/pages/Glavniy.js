import React from "react";
import "../assets/styles/Glavniy.css";
import Tilt  from "react-parallax-tilt";
import asset0 from "../photos/asset 0.png";
import asset1 from "../photos/asset 1.png";
import asset2 from "../photos/asset 2.png";
import asset3 from "../photos/asset 3.png";
import asset4 from "../photos/asset 4.png";
import asset5 from "../photos/asset 5.png";
import asset6 from "../photos/asset 6.png";
import asset7 from "../photos/asset 7.png";
import asset8 from "../photos/asset 8.png";
import asset9 from "../photos/asset 9.png";
import asset10 from "../photos/asset 10.png";
import asset11 from "../photos/asset 11.png";
import asset12 from "../photos/asset 12.png";
import asset13 from "../photos/asset 13.png";
import asset14 from "../photos/asset 14.png";
import asset15 from "../photos/asset 15.png";
import asset16 from "../photos/asset 16.png";
import asset17 from "../photos/asset 17.png";

function Glavniy() {
  return (
    <>
      <div className="containeer-one">
        <video autoPlay loop muted playsInline className="back-video">
          <source src="https://player.vimeo.com/external/660278794.hd.mp4?s=e4deeeb47bb419b5443c34fa7f0c89b7a31642c9&profile_id=174" type="video/mp4"></source>
        </video>
        <div>
          <h1>Платформа для онлайн обучения</h1>
          <p>Запусти обучение сотрудников сейчас, следуя простым инструкциям</p>
          <button>Попробовать бесплатно</button>
        </div>
      </div>
      <div className="containeer-two">
        <div className="row-image">
          <h1>Unicraft доверяют лидеры</h1>
          <div className="one-row">
            <img src={asset0} alt="" />
            <img src={asset1} alt="" />
            <img src={asset2} alt="" />
            <img src={asset3} alt="" />
          </div>
          <div className="two-row">
            <img src={asset4} alt="" />
            <img src={asset5} alt="" />
            <img src={asset6} alt="" />
            <img src={asset7} alt="" />
          </div>
          <div className="two-row">
            <img src={asset8} alt="" />
            <img src={asset9} alt="" />
            <img src={asset10} alt="" />
            <img src={asset11} alt="" />
          </div>
        </div>
      </div>
      <div className="containeer-three">
        <h1 className="containeer-three-h1">Интуитивное управление</h1>
        <div className="rows">
          <div className="one-rows">
            <h1>1</h1>
            <div>
              <Tilt tiltAxis={"y"} >
                <img src={asset12} alt="" />
                <img src={asset13} alt="" />
              </Tilt>
              <div className="texts">
                <h3>Загрузи материалы</h3>
                <p>Работай с привычными форматами прямо на платформе</p>
              </div>
            </div>
          </div>
          <div className="two-rows">
            <h1>2</h1>
            <div>
              <Tilt tiltAxis={"y"}>
                <img src={asset14} alt="" />
                <img src={asset15} alt="" />
              </Tilt>
              <div className="texts">
                <h3>Загрузи материалы</h3>
                <p>Работай с привычными форматами прямо на платформе</p>
              </div>
            </div>
          </div>
          <div className="three-rows">
            <h1>3</h1>
            <div>
              <Tilt tiltAxis={"y"}>
                <img src={asset16} alt="" />
                <img src={asset17} alt="" />
              </Tilt>
              <div className="texts">
                <h3>Загрузи материалы</h3>
                <p>Работай с привычными форматами прямо на платформе</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Glavniy;
