import React from 'react';

import './LetsTry.scss'
import MyInput from "../UI/input/MyInput";

const LetsTry = () => {
    return (
        <div className='letstry'>
            <div className="container">
                <div className="letstry__badge">
                    <img className='circle center-absolute' src="https://www.unicraft.org/style/img/letstrycta-bg.webp"/>
                    <img className='txt center-absolute' src="https://www.unicraft.org/style/img/letstrycta-badge.webp"/>
                    <img className="phone center-absolute" src="https://www.unicraft.org/style/img/letstrycta-telephone.webp"/>
                </div>
                <div className="letstry__inner row">
                    <img className='letstry__img' src="https://www.unicraft.org/style/img/letstrycta-photo.webp" alt="img"/>
                    <div className="letstry__content content">
                        <h2 className='content__title'>Запишитесь на презентацию</h2>
                        <p className='content__desc'>Проведем краткий обзор платформы, покажем как решить ваши задачи и подскажем первые шаги для эффективного запуска</p>
                        <form className='content__form'>
                            <label>
                                <MyInput placeholder="Ваше имя" />
                            </label>
                            <label>
                                <MyInput placeholder='+998 99 888 88 99' />
                            </label>
                            <button className='content__btn btn btn-green'>Записаться сейчас</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LetsTry;