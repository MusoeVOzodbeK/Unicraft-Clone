import React, {useState} from 'react';

import './ModuleItem.scss';
import ItemModal from "./ItemModal";
import MyModal from "../../UI/modal/MyModal";

const ModuleItem = ({ item }) => {

    const [modal, setModal] = useState(false);
    const [scModal, setScModal] = useState(false)

    return (
        <li className='module__item item'>
            { modal && <ItemModal item={item} setModal={setModal} setScModal={setScModal} /> }
            { scModal && <MyModal setModalActive={setScModal} /> }
            <div className='item__titles' onClick={() => setModal(true)}>
                <div><i className={`${item.icon} icon`} /></div>
                <h4 className='item__title'>{ item.title }</h4>
                <p className="item__desc">{ item.desc }</p>
            </div>
        </li>
    );
};

export default ModuleItem;
