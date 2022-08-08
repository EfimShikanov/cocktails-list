import React from 'react';
import {useState} from "react";
import S from "./Dropdown.module.scss";
import DropdownItem from "./dropdownItem/DropdownItem";

const Dropdown = ({sortingValue, setSortingValue}) => {

    const dropdownItems = ['name', 'id'];
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const renderDropdown = () => {
        if(isDropdownOpen) {
            return dropdownItems.map((item, index) => {
                return <DropdownItem key={index} name={item} onClick={() => setSortingValue(item)}/>
            })
        }
    };

    return (
        <div className={S.sorting} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <div className={S.sortingValue}>
                Sort by {sortingValue}
            </div>
            <div className={S.sortingIcon}>
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 10L12.9952 0.25H0.00480938L6.5 10Z" fill="#D9D9D9"/>
                </svg>
            </div>
            <div className={S.dropdown}>
                {renderDropdown()}
            </div>
        </div>
    );
};

export default Dropdown;