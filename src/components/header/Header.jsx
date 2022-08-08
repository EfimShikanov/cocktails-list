import React from "react";
import S from "./Header.module.scss";

const Header = ({text}) => {
    return (
        <div className={S.header}>
            {text}
        </div>
    )
}

export default Header;