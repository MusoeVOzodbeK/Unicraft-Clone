import React from 'react';
import ModuleItem from "./module-item/ModuleItem";

const Module = ({ title, list }) => {



    return (
        <div className='modules__module module'>
            <div className="module__inner">
                <h3 className="module__title">{ title }</h3>
                <ul className='module__list'>
                    {
                        list.map((item, i) => (
                            <ModuleItem item={item} key={i} />
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Module;
