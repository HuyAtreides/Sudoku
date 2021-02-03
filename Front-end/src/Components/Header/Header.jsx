import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
const openNav = (event) => {
  const aboutSudoku = document.querySelector(".about-sudoku");
  if (event.currentTarget.className === "fas fa-times") {
    aboutSudoku.style.display = "none";
    event.currentTarget.className = "fa fa-bars";
  } else {
    event.currentTarget.className = "fas fa-times";
    aboutSudoku.style.display = "flex";
  }
};

const Header = () => {
  return (
    <header>
      <div id="header-wraper">
        <div className="title-and-bars">
          <i className="fa fa-bars" onClick={openNav}></i>
          <h2>Sudoku</h2>
        </div>
        <h1>Sudoku</h1>
        <nav className="about-sudoku">
          <ul>
            <Link to="/about">
              <li>
                About<div id="underline"></div>
              </li>
            </Link>

            <Link to="/how-to-play">
              <li>
                How To Play<div id="underline"></div>
              </li>
            </Link>

            <Link to="/tips">
              <li>
                Tips<div id="underline"></div>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
