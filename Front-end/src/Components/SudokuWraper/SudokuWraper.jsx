import React from "react";
import "./SudokuWraper.scss";
import GameInfo from "./GameInfo/GameInfo.jsx";
import GameWraper from "./GameWraper/GameWraper.jsx";
import clone from "../../CloneBoard/clone.js";

const blankCells = { Easy: 41, Medium: 48, Hard: 50 };

class SudokuWraper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: "Easy",
      mistakes: 0,
      time: 0,
      start: false,
      board: [],
      tooltip: false,
      target: null,
      showSelector: false,
      blankCells: null,
      isVisualizing: false,
      genrating: false,
    };
    this.startTimer = this.startTimer.bind(this);
    this.setDifficulty = this.setDifficulty.bind(this);
    this.chooseDifficulty = this.chooseDifficulty.bind(this);
    this.generateNewPuzzle = this.generateNewPuzzle.bind(this);
    this.focus = this.focus.bind(this);
    this.setValue = this.setValue.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
    this.removeValue = this.removeValue.bind(this);
    this.showHint = this.showHint.bind(this);
    this.visualize = this.visualize.bind(this);
    this.sovle = this.sovle.bind(this);
  }

  showHint() {
    if (this.state.start && !this.state.isVisualizing) {
      this.setState((prevState) => {
        if (!prevState.target) return {};
        const [row, col] = prevState.target;
        const cell = prevState.board[row][col];
        const correctValue = this.solution[row][col];

        if (cell.value === 0) {
          cell.value = correctValue;
          cell.hint = true;
          if (prevState.blankCells - 1 === 0) this.startTimer();
          prevState.blankCells -= 1;
          isFilled(row, col, prevState.board, prevState.blankCells);
        }

        return { board: prevState.board, blankCells: prevState.blankCells };
      });
    }
  }

  visualize() {
    if (!this.state.start || this.state.generating) return;
    if (!this.state.isVisualizing) {
      this.setState(
        {
          isVisualizing: true,
        },
        () => {
          this.sovle(0);
        }
      );
    } else this.setState({ isVisualizing: false });
  }

  async sovle(index) {
    if (index === this.blankCellsPostions.length || !this.state.isVisualizing) {
      if (this.state.isVisualizing) this.setState({ isVisualizing: false });
      return Promise.resolve("solved");
    }
    const row = this.blankCellsPostions[index][0];
    const col = this.blankCellsPostions[index][1];
    this.setState((prevState) => {
      prevState.board[row][col].focus = "target";
      return {
        board: prevState.board,
      };
    });
    for (let num = 1; num <= 9; num++) {
      let board = this.state.board;
      this.setState((prevState) => {
        prevState.board[row][col].value = num;
        prevState.board[row][col].wrong = true;
        prevState.board[row][col].hint = true;
        return { board: prevState.board };
      });
      if (!this.state.isVisualizing) return Promise.resolve("solved");
      await new Promise((resolve, reject) => {
        setTimeout(() => resolve("continue"), 90);
      });
      if (
        checkRow(row, col, board, num) &&
        checkCol(row, col, board, num) &&
        checkBox(row, col, board, num)
      ) {
        this.setState((prevState) => {
          prevState.board[row][col].wrong = false;
          prevState.board[row][col].hint = false;
          return { board: prevState.board };
        });
        let isSolved = await this.sovle(index + 1);
        if (isSolved === "solved") {
          return Promise.resolve("solved");
        }
      }
    }
    this.setState((prevState) => {
      prevState.board[row][col].value = 0;
      prevState.board[row][col].focus = "";
      return { board: prevState.board };
    });
    return Promise.resolve("false");
  }

  removeValue() {
    if (this.state.start && !this.state.isVisualizing) {
      this.setState((prevState) => {
        if (!prevState.target) return {};
        const [row, col] = prevState.target;
        const cell = prevState.board[row][col];
        if ((!cell.hint || cell.wrong) && cell.value !== 0) {
          if (!cell.hint) prevState.blankCells += 1;
          cell.value = 0;
          cell.wrong = false;
          cell.hint = true;
          cell.complete = false;
          return { board: prevState.board, blankCells: prevState.blankCells };
        }
        return {};
      });
    }
  }

  showTooltip() {
    this.setState((prevState) => ({
      tooltip: !prevState.tooltip,
    }));
  }

  getCellBoxPosition(event) {
    if (!event.currentTarget) {
      if (this.state.target !== null) {
        const prevRow = this.state.target[0];
        const prevCol = this.state.target[1];
        const newRow = prevRow + event[0];
        const newCol = prevCol + event[1];
        const isValidRow = newRow < 9 && newRow >= 0;
        const isValidCol = newCol < 9 && newCol >= 0;
        if (isValidCol && isValidRow)
          return [newRow, newCol, this.state.board[newRow][newCol].value];
        return [prevRow, prevCol, this.state.board[prevRow][prevCol].value];
      }
      return [0, 0, this.state.board[0][0].value];
    }
    const cell = event.currentTarget;
    const col = parseInt(cell.getAttribute("col"));
    const row = parseInt(cell.parentNode.getAttribute("row"));
    return [row, col, cell.getAttribute("value")];
  }

  highlight(prevState, [row, col, cellVal]) {
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    prevState.board.forEach((boardRow, rowIndex) => {
      boardRow.forEach((cell, colIndex) => {
        const isInBox =
          rowIndex >= boxRow &&
          rowIndex < boxRow + 3 &&
          colIndex >= boxCol &&
          colIndex < boxCol + 3;
        if (rowIndex === row || colIndex === col || isInBox)
          cell.focus = "inDomain";
        else cell.focus = false;
        if (parseInt(cellVal) === cell.value && !cell.wrong && cell.value !== 0)
          cell.sameValue = true;
        else cell.sameValue = false;
      });
    });
    prevState.board[row][col].focus = "target";
  }

  focus(event) {
    if (this.state.start && !this.state.generating) {
      const [row, col, cellVal] = this.getCellBoxPosition(event);
      this.setState((prevState) => {
        this.highlight(prevState, [row, col, cellVal]);
        return { board: prevState.board, target: [row, col, cellVal] };
      });
    }
  }

  chooseDifficulty() {
    this.setState((prevState) => ({
      showSelector: !prevState.showSelector,
    }));
  }

  generateNewPuzzle(choosenDifficulty, reset) {
    if (this.state.isVisualizing) return;
    setTimeout(() => {
      if (!reset) {
        fetch(`http://localhost:8080/generate-board/${this.state.difficulty}`)
          .then((res) => res.json())
          .then(([solution, newBoard, blankCellsPostions]) => {
            this.solution = solution;
            this.blankCellsPostions = blankCellsPostions;
            this.setState(
              {
                generating: false,
                board: newBoard,
                blankCells: blankCells[this.state.difficulty],
              },
              () => {
                this.backupBoard = clone(this.state.board);
              }
            );
          });
      } else {
        this.setState(
          {
            generating: false,
            board: this.backupBoard,
            blankCells: blankCells[this.state.difficulty],
          },
          () => {
            this.backupBoard = clone(this.state.board);
          }
        );
      }
      this.startTimer();
    }, 500);
    this.setState((prevState) => ({
      difficulty:
        choosenDifficulty === null ? prevState.difficulty : choosenDifficulty,
      mistakes: 0,
      board: new Array(9).fill([0, 0, 0, 0, 0, 0, 0, 0, 0]),
      time: 0,
      generating: true,
      start: false,
      showSelector: false,
      target: null,
      blankCells: 1,
      tooltip: false,
    }));
    clearInterval(this.intervalID);
  }

  setDifficulty(event) {
    const choosenDifficulty = event.currentTarget.getAttribute("value");
    if (choosenDifficulty !== this.state.difficulty) {
      this.generateNewPuzzle(choosenDifficulty, false);
    }
  }

  handleSetValueLogic(prevState, number) {
    if (!prevState.target) return {};
    const [row, col] = prevState.target;
    const cell = prevState.board[row][col];
    const correctValue = this.solution[row][col];
    if (cell.value === 0) {
      if (number !== correctValue) {
        cell.wrong = true;
        if (prevState.mistakes + 1 === 3) this.startTimer();
        prevState.mistakes += 1;
      } else {
        cell.hint = false;
        if (prevState.blankCells - 1 === 0) this.startTimer();
        prevState.blankCells -= 1;
      }
      cell.value = number;
      isFilled(row, col, prevState.board, prevState.blankCells);
      return {
        board: prevState.board,
        mistakes: prevState.mistakes,
        blankCells: prevState.blankCells,
      };
    }
    return {};
  }

  setValue(event) {
    if (
      this.state.start &&
      this.state.mistakes < 3 &&
      !this.state.isVisualizing
    ) {
      let number = event;
      if (event.currentTarget !== undefined)
        number = parseInt(event.currentTarget.getAttribute("value"));
      this.setState((prevState) => {
        return this.handleSetValueLogic(prevState, number);
      });
    }
  }

  startTimer() {
    if (
      this.state.mistakes === 3 ||
      this.state.blankCells === 0 ||
      this.state.isVisualizing
    )
      return;
    if (!this.state.start) {
      this.setState({ start: true });

      this.intervalID = setInterval(() => {
        this.setState((prevState) => ({
          time: prevState.time + 1,
        }));
      }, 1000);
    } else {
      clearInterval(this.intervalID);
      this.setState({
        start: false,
      });
    }
  }

  componentDidMount() {
    const keyMove = {
      ArrowUp: [-1, 0],
      ArrowDown: [1, 0],
      ArrowLeft: [0, -1],
      ArrowRight: [0, 1],
    };
    document.addEventListener("keydown", (event) => {
      if (/[1-9]/.test(event.key)) this.setValue(parseInt(event.key));
      else if (event.key === "Delete") this.removeValue();
      else if (keyMove[event.key]) this.focus(keyMove[event.key]);
    });
    // this.startTimer();
    this.generateNewPuzzle("Easy", this.state.board.length);
  }

  render() {
    return (
      <div className="sudoku-wraper">
        <GameInfo
          difficulty={this.state.difficulty}
          mistakes={this.state.mistakes}
          time={this.state.time}
          startTimer={this.startTimer}
          start={this.state.start}
          setDifficulty={this.setDifficulty}
          showSelector={this.state.showSelector}
          chooseDifficulty={this.chooseDifficulty}
          generating={this.state.generating}
        />
        <GameWraper
          board={this.state.board}
          mistakes={this.state.mistakes}
          start={this.state.start}
          startTimer={this.startTimer}
          time={this.state.time}
          difficulty={this.state.difficulty}
          generateNewPuzzle={this.generateNewPuzzle}
          focus={this.focus}
          setValue={this.setValue}
          showTooltip={this.showTooltip}
          tooltip={this.state.tooltip}
          removeValue={this.removeValue}
          showHint={this.showHint}
          blankCells={this.state.blankCells}
          visualize={this.visualize}
          generating={this.state.generating}
          isVisualizing={this.state.isVisualizing}
        />
      </div>
    );
  }
}

const animateFilled = ([row, col], delay, name) => {
  const filledRow = document.querySelector(`.row${row}`);
  const filledCol = filledRow.querySelector(`.col${col}`);
  filledCol.style.animation = `animate 0.3s ease-in ${delay}s`;
  filledCol.onanimationend = () => {
    if (name === "solved") filledCol.style.color = "transparent";
    filledCol.style.animation = "";
  };
};

const checkRow = (row, col, board, num) => {
  let isFilled = true;
  for (let i = 0; i < 9; i++) {
    if (!num && (!board[row][i].value || board[row][i].wrong)) isFilled = false;
    else if (board[row][i].value === num && i !== col && !board[row][i].wrong) {
      return false;
    }
  }
  if (isFilled && !num) {
    for (let i = 0; i < 9; i++) {
      animateFilled([row, i], 0.05 * i);
    }
  }
  return true;
};

const checkCol = (row, col, board, num) => {
  let isFilled = true;
  for (let i = 0; i < 9; i++) {
    if (!num && (!board[i][col].value || board[i][col].wrong)) isFilled = false;
    else if (board[i][col].value === num && i !== row && !board[i][col].wrong) {
      return false;
    }
  }
  if (isFilled && !num) {
    for (let i = 0; i < 9; i++) {
      animateFilled([i, col], 0.05 * i);
    }
  }
  return true;
};

const checkBox = (row, col, board, num) => {
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  let isFilled = true;
  for (let i = boxRow; i < boxRow + 3; i++)
    for (let j = boxCol; j < boxCol + 3; j++)
      if (!num && (!board[i][j].value || board[i][j].wrong)) isFilled = false;
      else if (
        board[i][j].value === num &&
        i !== row &&
        j !== col &&
        !board[i][j].wrong
      ) {
        return false;
      }
  if (isFilled && !num) {
    let delay = 0;
    for (let i = boxRow; i < boxRow + 3; i++)
      for (let j = boxCol; j < boxCol + 3; j++) {
        delay = delay + 0.05 * (j % 3);
        animateFilled([i, j], delay);
      }
  }
  return true;
};

const animateBoard = () => {
  for (let i = 0; i < 9; i++)
    for (let j = 0; j < 9; j++) {
      let delay = 0.05 * j;
      animateFilled([i, j], delay, "solved");
    }
};

const isFilled = (row, col, board, blankCells) => {
  if (!blankCells) animateBoard();
  else {
    checkRow(row, col, board);
    checkCol(row, col, board);
    checkBox(row, col, board);
  }
};

export default SudokuWraper;
