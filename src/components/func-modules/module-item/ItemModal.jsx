import React from 'react';

const ItemModal = ({ item, setModal}) => {

    return (
        <div className='item__overview overview'>
            <div className="overview__content content">
                <i className="fal fa-expand-arrows" />
                <i className="far fa-times" onClick={() => setModal(false)} />
                <div className="content__inner row between align-center">
                    <div className="content__imgs row align-center">
                        <div className='content__frame'>
                            <img className='content__img active' src={item.imgs[0]} alt='img' />
                        </div>
                        <ul className="content__corusel row">
                            {
                                item.imgs.map((img, i) => (
                                    <li  key={i}><img src={img} alt='img' /></li>
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
                        <button className='btn btn-green'>Попробовать бесплатно</button>
                    </div>
                </div>
            </div>
            <div className="bg" />
        </div>
    );
};

export default ItemModal;
