import React from 'react';
import S from "./Input.module.scss";

const Input = ({value, onChange}) => {
    return (
        <div className={S.input}>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="8.57143" cy="8.76923" rx="8.57143" ry="8.76923" fill="white"/>
                <path d="M14.2857 14.6154L20 19" stroke="white"/>
            </svg>
            <input type="text" placeholder="Let’s find some drinks..." value={value} onChange={(e) => onChange(e.target.value)}/>
        </div>
    );
};

export default Input;