import React, {useState} from 'react';

const ItemModal = ({ item, setModal, setScModal}) => {

    const [imgActive, setImgActive] = useState(0)

    return (
        <div className={`item__overview overview`}>
            <div className="overview__content content">
                <i className="fal fa-expand-arrows i" />
                <i className="far fa-times i" onClick={() => setModal(false)} />
                <div className="content__inner row between align-center">
                    <div className="content__imgs row align-center">
                        <div className='content__frame'>
                            <img className='content__img active' src={item.imgs[imgActive]} alt="img"/>
                        </div>
                        <ul className="content__corusel row center">
                            {
                                item.imgs.map((img, i) => (
                                    <li key={i}>
                                        <img
                                            className={`content__corusel-img ${imgActive === i ? 'active' : ''}`}
                                            src={img}
                                            alt='img'
                                            onClick={() => setImgActive(i)}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="content__titles">
                        <h4 className="content__title">{ item.title }</h4>
                        <p className='content__desc'>{ item.overview }</p>
                        <ul className='content__list'>
                            {
                                item.promo.map((txt, i) => (
                                    <li className='content__item align-center' key={i}>
                                        <i className="far fa-check" />
                                        <span>{ txt }</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <button
                            className='content__btn btn btn-green'
                            onClick={() => {
                                setModal(false)
                                setScModal(true)
                            }}
                        >
                            Попробовать бесплатно
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg" onClick={() => setModal(false)} />
        </div>
    );
};

export default ItemModal;
