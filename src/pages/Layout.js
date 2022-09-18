import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../assets/styles/Layout.css";
import icon from "../photos/image-removebg-preview (3).png"
function Layout() {
  return (
    <>
      <header className="header">
        <div>
          <img
            src={icon}
            alt=""
          />
          <p>Unicraft — платформа для онлайн обучения</p>
        </div>
        <ul className="ul-li">
          <li>
            <Link className="link" to="/">Главная</Link>
          </li>
          <li>
            <Link className="link" to="/platforma">Платформа</Link>
              {/* <ul className="ul-hovers">
                <li><Link className="link" to="/platforma">Функционал</Link></li>
                <li>Каталог курсов<i class='bx bx-link-external'></i></li>
              </ul> */}
          </li>
          <li>
            <Link className="link" to="/tarif">Тарифы</Link>
              {/* <ul>
                <li>Стоимость</li>
                <li>Возможность</li>
                <li>Частые вапросы</li>
              </ul> */}
          </li>
          <li>
            <Link className="link" to="/kompaniya">Компания</Link>

              {/* <ul>
                <li>О нас</li>
                <li>Отзывы</li>
                <li>Партнерам</li>
                <li>Вакансии</li>
                <li>Контакты</li>
              </ul> */}
            
          </li>
          <li>
            <Link className="link" to="/podderjka">Поддержка</Link>
          </li>
          <li>
            <Link className="link" to="/blog">Блог</Link>
              {/* <ul>
                <li>Стать автором</li>
              </ul> */}
          </li>
		<button>Ru</button>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      {/* footer  */}
      
    </>
  );
}

export default Layout;
