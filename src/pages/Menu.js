import React from 'react';
import { MenuPointsOfInterestList } from "../helpers/MenuPointsOfInterestList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
    return (
      <div className="menu">
        <h1 className="menuTitle">Main Points of Interest in Sofia</h1>
        <div className="menuList">
          {MenuPointsOfInterestList.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                // price={menuItem.price}
              />
            );
          })}
        </div>
      </div>
    );
  }

export default Menu