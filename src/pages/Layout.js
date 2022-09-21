import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../assets/styles/Layout.css";
import icon from "../photos/image-removebg-preview (3).png";
function Layout() {
  const setMenuBar = () => {
    document.querySelector(".navbar").classList.toggle("toggle");
    console.log(document.querySelector(".ul-li"))
  };
  return (
    <>
      <header className="header">
        <div>
          <img src={icon} alt="" />
          <p>Unicraft — платформа для онлайн обучения</p>
        </div>
        <nav className="navbar">

        <ul className="ul-li" >
          <li>
            <Link className="link" to="/">
              Главная
            </Link>
          </li>
          <li>
            <Link className="link" to="/platforma">
              Платформа
            </Link>
            <ul className="ul-hovers">
                <li ><Link className="link" to="/platforma">Функционал</Link></li>
                <li >Каталог курсов<i class='bx bx-link-external'></i></li>
              </ul>
          </li>
          <li>
            <Link className="link" to="/tarif">
              Тарифы
            </Link>
            <ul className="second-hover">
                <li>Стоимость</li>
                <li>Возможность</li>
                <li>Частые вапросы</li>
              </ul>
          </li>
          <li>
            <Link className="link" to="/kompaniya">
              Компания
            </Link>

            <ul className="threend-hover">
                <li>О нас</li>
                <li>Отзывы</li>
                <li>Партнерам</li>
                <li>Вакансии</li>
                <li>Контакты</li>
              </ul>
          </li>
          <li>
            <Link className="link" to="/podderjka">
              Поддержка
            </Link>
          </li>
          <li>
            <Link className="link" to="/blog">
              Блог
            </Link>
            <ul className="fourth-hover">
                <li>Стать автором</li>
              </ul>
          </li>
          <li>
            <button className="lang">Ru</button>
            <ul className="lang-eng">
              <li><button>Eng</button></li>
            </ul>
          </li>
        </ul>
        </nav>
        <button onClick={setMenuBar}>
          <i className="bx bx-menu"></i>
        </button>
      </header>
      <main>
        <Outlet />
      </main>
      {/* footer  */}
    </>
  );
}

export default Layout;
