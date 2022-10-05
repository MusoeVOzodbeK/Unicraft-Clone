import React, {useState} from 'react';

import './ModuleItem.scss';
import ItemModal from "./ItemModal";

const ModuleItem = ({ item }) => {

    // const [modalItem, setModalItem] = useState(undefined)
    const [modal, setModal] = useState(false)

    return (
        <li className='module__item item' onClick={() => setModal(true)}>
            {
                modal === false ? null : <ItemModal item={item} setModal={setModal} />
            }
            <div className='item__titles'>
                <div><i className={`${item.icon} icon`} /></div>
                <h4 className='item__title'>{ item.title }</h4>
                <p className="item__desc">{ item.desc }</p>
            </div>
        </li>
    );
};

export default ModuleItem;
