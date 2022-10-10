import React from 'react';

import './Modules.scss'
import Module from "./Module";
import moduleList from "../../api/moduleList";

const Modules = () => {
    const revMyArr = [].concat(moduleList).reverse();
    return (
        <div className='modules'>
            <div className="container">
                <div className="modules__inner center">
                    <div className="modules__titles">
                        <h2 className="modules__title">Unicraft platformasining funktsionali</h2>
                        <p className='modules__desc'>Unicraft uLearn platformasi modulli arxitekturaga ega. Platformaning asosiy modullari asosiy to'plamga kiritilgan. Qo'shimcha modullar talab bo'yicha taqdim etiladi.</p>
                    </div>
                    <Module title='Asosiy modullar' list={moduleList} />
                    <Module title='Qoshimcha modullar' list={revMyArr} />
                </div>
            </div>
        </div>
    );
};

export default Modules;



