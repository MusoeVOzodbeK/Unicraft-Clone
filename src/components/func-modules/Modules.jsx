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
                        <h2 className="modules__title">Функционал платформы Unicraft</h2>
                        <p className='modules__desc'>Платформа Unicraft uLearn имеет модульную архитектуру. Основные модули платформы включены в базовый набор. Дополнительные модули предоставляются по запросу.</p>
                    </div>
                    <Module title='Основные модули' list={moduleList} />
                    <Module title='Дополнительные модули' list={revMyArr} />
                </div>
            </div>
        </div>
    );
};

export default Modules;



