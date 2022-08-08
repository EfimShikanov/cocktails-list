import React from 'react';

const DropdownItem = ({name, onClick}) => {
    console.log(name)
    return (
        <div onClick={onClick}>
            {name}
        </div>
    );
};

export default DropdownItem;