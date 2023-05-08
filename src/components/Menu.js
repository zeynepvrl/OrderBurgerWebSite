import React from "react";
import { Data } from "../helpers/Data";
import BurgerCards from "../components/BurgerCards";
import '../Styles/Menu.css'   //Bu CSS BurgerCards.js i de kapsayacak

export const Menu = () => {
  return (
    <div className="menu">
      <h1 className="manuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {Data.map((menuItem, key) => {
          return (
            <BurgerCards
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
};
