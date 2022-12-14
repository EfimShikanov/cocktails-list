import React, { useEffect, useState } from "react";
import "./scss/main.scss";
import { fetchCocktails } from "./js/api/getCocktails";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import Select from "./components/select/Select";
import CardsList from "./components/cardsList/CardsList";

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [cocktails, setCocktails] = useState([]);
  const [sortingValue, setSortingValue] = useState("strDrink");
  const [searchValue, setSearchValue] = useState("");

  const selectOptions = [
    { value: "strDrink", name: "Sort by name" },
    { value: "idDrink", name: "Sort by ID" },
  ];

  useEffect(() => {
    fetchCocktails(setCocktails, setIsReady);
  }, []);

  return (
    <>
      <Header text={"COCKTAILS"} />
      {isReady ? (
        <div className="container">
          <div className="filters">
            <Input value={searchValue} onChange={setSearchValue} />
            <Select
              sortingValue={sortingValue}
              setSortingValue={setSortingValue}
              selectOptions={selectOptions}
            />
          </div>
          <div className="content">
            <CardsList
                cocktails={cocktails}
                sortingValue={sortingValue}
                searchValue={searchValue}
            />
          </div>
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </>
  );
};

export default App;
