import React from "react";
import Header from "./Header/Header.jsx";
import SudokuWraper from "./SudokuWraper/SudokuWraper.jsx";

class Sudoku extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <SudokuWraper />
      </div>
    );
  }
}
export default Sudoku;
