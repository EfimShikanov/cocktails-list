import React from "react";
import Input from "../input/Input";
import Dropdown from "../dropdown/Dropdown";
import CardsList from "../cardsList/CardsList";
import S from "./Container.module.scss";

const Container = ({cocktails}) => {
    return (
        <div className={S.container}>
            <div className={S.filters}>
                <Input />
                <Dropdown />
            </div>
            <CardsList cocktails={cocktails}/>
        </div>
    );
};

export default Container;
