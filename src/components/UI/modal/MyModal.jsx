import React, {useState} from 'react';

import './MyModal.scss'
import MyInput from "../input/MyInput";

const MyModal = ({ modalActive, setModalActive }) => {

    const [itemActive, setItemActive] = useState(0)
    const [addInp, setAddInp] = useState(false)

    return (
        <div className='modal'>
            <div className="modal__content content">
                <div onClick={() => setModalActive(false)}>
                    <i className="far fa-times"></i>
                </div>
                <h3 className="content__title">Для получения доступа укажите</h3>
                <span className='content__txt'>Кто будет обучаться на платформе?</span>
                <ul className='content__list row'>
                    <li className={`content__item ${itemActive === 0 && 'active'}`}
                        onClick={() => setItemActive(0)}
                    >
                        Сотрудники
                    </li>
                    <li className={`content__item ${itemActive === 1 && 'active'}`}
                        onClick={() => setItemActive(1)}
                    >
                        Клиенты
                    </li>
                    <li className={`content__item ${itemActive === 2 && 'active'}`}
                        onClick={() => setItemActive(2)}
                    >
                        Студенты и школьники
                    </li>
                    <li className={`content__item ${itemActive === 3 && 'active'}`}
                        onClick={() => setItemActive(3)}
                    >
                        Другие
                    </li>
                </ul>
                <span className='content__txt'>Контактные данные</span>
                <form className='content__form form'>
                    <label>
                        <MyInput className='small' placeholder='Имя и фамилмя' type='text' />
                    </label>
                    <label>
                        <MyInput className='small' placeholder='Название организации' type='text' />
                    </label>
                    <label>
                        <MyInput className='small' placeholder='+998 99 888 88 99' type='number' />
                    </label>
                    <label>
                        <MyInput className='small mail' placeholder='E-mail' type='mail' />
                    </label>
                    <label>
                        <MyInput className={`small ${addInp ? 'block' : 'none'}`} placeholder='Промокод' type='mail' />
                    </label>
                    <span className={`form__accord ${addInp && 'none'}`}
                          onClick={() => setAddInp(true)}
                    >
                        Узнать промокод
                    </span>
                    <button className="form__btn btn btn-green">Получить доступ</button>
                </form>
                <p className='content__prv-policy'>Нажимая кнопку «Получить доступ», вы соглашаетесь с <a>Публичной офертой</a> и <a>Согласием на обработку персональных данных.</a></p>
            </div>
            <div className="bg" onClick={() => setModalActive(false)} />
        </div>
    );
};


export default MyModal;