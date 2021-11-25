import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShopingBasketIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      <div>
        <Link to="/">
          <img
            className="header__logo"
            src="https://cdn.neow.in/news/images/uploaded/2021/06/1622736066_amazon-logo_story.jpg"
            alt=""
          />
        </Link>
      </div>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Maya</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShopingBasketIcon className="basket" />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;