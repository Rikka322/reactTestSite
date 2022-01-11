import React from 'react';
import cl from './MyModal.module.css'

const MyModal = ({children, visibley, setVisibley}) => {

    const rootClasses =[cl.myModal];

    if (visibley) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisibley(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;