import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Sudoku from "./Components/Sudoku.jsx";
import About from "./Components/About.jsx";
import HowToPlay from "./Components/HowToPlay.jsx";
import Tips from "./Components/Tips.jsx";
import React from "react";
const SudokuApp = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/how-to-play" component={HowToPlay} />
        <Route path="/tips" component={Tips} />
        <Route path="/" component={Sudoku} />
      </Switch>
    </Router>
  );
};
export default SudokuApp;
