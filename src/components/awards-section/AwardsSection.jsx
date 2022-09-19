import React, {useState} from 'react';

import './AwardsSection.scss'
import MyModal from "../UI/modal/MyModal";

const AwardsSection = () => {

    const awardsList = [
        {
          id: 1,
          title: ['Первое', 'место'],
          desc: '№1 платформа для дистанционного обучения в рейтинге сервисов для бизнеса',
          img: 'https://www.unicraft.org/style/img/awards_logo/startpack.png',
          borderClr: '#55bdf4'
        },
        {
            id: 2,
            title: ['ТОП-100', 'ТОП-100'],
            desc: 'ТОП-100 EdTech компаний России и СНГ по версии ведущего аналитического агентства',
            img: 'https://www.unicraft.org/style/img/awards_logo/holoniq.png',
            borderClr: '#C3C3C3'
        },
        {
            id: 3,
            title: ['Лидерство', 'технологий'],
            desc: 'Победитель конкурса "Глобальное технологическое лидерство"',
            img: 'https://www.unicraft.org/style/img/awards_logo/rvk.png',
            borderClr: '#281c6b'
        },
        {
            id: 4,
            title: ['Включено', 'в реестр ПО'],
            desc: 'Платформа для дистанционного обучения Unicraft uLearn входит в единый реестр Российского ПО',
            img: 'https://www.unicraft.org/style/img/awards_logo/mincomsv.png',
            borderClr: '#319ED7'
        },
    ]

    const [modalActive, setModalActive] = useState(false)

    return (
        <div className='awards'>
            {modalActive && <MyModal modalActive={modalActive} setModalActive={setModalActive} />}
            <div className="bg bg-cup" />
            <div className="container">
                <div className="awards__inner">
                    <h2 className='awards__title'>Популярное и признанное решение</h2>
                    <ul className="awards__list row">
                        {
                            awardsList.map((item, i) => (
                                <li
                                    key={i}
                                    className="wards__item item"
                                    style={{borderColor: item.borderClr}}
                                >
                                    <img className='item__img' src={item.img} alt="our awards"/>
                                    <div className="item__titles">
                                        <h3 className='item__title'>
                                            { item.title[0] }
                                            <span>{ item.title[1] }</span>
                                        </h3>
                                        <p className='item__desc'>{ item.desc }</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <p className='awards__desc'>Платформа для организации и проведения дистанционного обучения,
                        многократно доказавшая свою эффективность на практике</p>
                    <button className='awards__btn btn btn-blue' onClick={() => setModalActive(true)}>Подключиться</button>
                </div>
            </div>
            <div className="awards__wrapper wrapper">
                <div className="wrapper__content row between align-center">
                    <div className="wrapper__titles">
                        <h3 className='wrapper__title'>Знания всегда под рукой</h3>
                        <p className="wrapper__desc">Установите мобильное приложение на свой смартфон и обучайтесь в удобное время из любой точки мира</p>
                        <ul className="wrapper__list row">
                            <li>
                                <a href="https://apple-store.com"><img src="https://www.unicraft.org/style/img/appbadges/badge-appstore-ru.svg" alt="play-market"/></a>
                            </li>
                            <li>
                                <a href="https://google-play.com"><img src="https://www.unicraft.org/style/img/appbadges/badge-googleplay-ru.png" alt="apple-store"/></a>
                            </li>
                            <li>
                                <a href="https://app-gallery.com"><img src="https://www.unicraft.org/style/img/appbadges/badge-huaweiappgallery-ru.svg" alt="app-galery"/></a>
                            </li>
                        </ul>
                    </div>
                    <img className='wrapper__img' src="https://www.unicraft.org/style/img/mobileapp_hand-ru.webp" alt="bg-phone"/>
                </div>
            </div>
        </div>
    );
};

export default AwardsSection;