import React, { useEffect, useState } from "react";
import "./scss/main.scss";
import { fetchCocktails, searchByFirstLetter, searchByName } from "./js/getCocktails";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import Dropdown from "./components/dropdown/Dropdown";
import CardsList from "./components/cardsList/CardsList";

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [cocktails, setCocktails] = useState([]);
  const [sortingValue, setSortingValue] = useState('name');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchCocktails(setCocktails, setIsReady);
  }, []);

  if(searchValue.length !== 0) {
    if(searchValue.length === 1) {
      searchByFirstLetter(searchValue, setCocktails);
    }
    if(searchValue.length > 1) {
      searchByName(searchValue, setCocktails);
    }
  } else {
    fetchCocktails(setCocktails)
  }


  return (
    <>
      <Header text={"COCKTAILS"} />
      {isReady ? (
        <div className="container">
            <div className="filters">
                <Input value={searchValue} onChange={setSearchValue}/>
                <Dropdown sortingValue={sortingValue} setSortingValue={setSortingValue}/>
            </div>
            <CardsList cocktails={cocktails} sortingValue={sortingValue}/>
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </>
  );
};

export default App;
