import "./Tips.scss";
import React from "react";
import { Link } from "react-router-dom";

const Tips = () => {
  return (
    <div id="tips">
      <header id="tips-header">
        <div id="tips-wraper">
          <h1>Sudoku</h1>
          <nav className="play-sudoku">
            <ul>
              <Link to="/">
                <li>
                  Play Sudoku<div id="underline"></div>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
      <div className="tips-body">
        <h2 style={{ color: "#344861" }}> Sudoku Tips </h2>
        <img
          src="https://image.freepik.com/free-photo/pencil-lying-sudoku-grid_126745-1664.jpg"
          alt="sudoku-board-and-pencil"
          id="tips-entry-image"
        />
        <div className="tips-content">
          <p>
            <strong>Look for the easy play first: </strong>
            When you first start to play a Sudoku puzzle, look for where you
            have the easiest opportunities to add a number. Usually this is
            where there is a crowded square or a row that is almost full of
            numbers. Sometimes, especially on the Easy-rated Sudoku puzzles, you
            can quickly use process of elimination to figure out where to place
            a number. For example, if there is a square that already has numbers
            1-7, you know that you only need to figure out where to put numbers
            8 and 9. Look at the rows that feed into that row or square –
            sometimes you will be able to eliminate one number or the other, and
            can quickly fill in the gaps.
          </p>
          <img
            src="https://sudoku.com/img/post-images/Sudoku-Example-1.jpg"
            alt="sudoku-board"
            id="tips-content-image"
          />
          <p>
            <strong>Look for which numbers are missing: </strong>
            Sudoku is about placing numbers where they don’t already exist –
            it’s a logical process of elimination. If a number already exists in
            a row or square, then that number cannot be placed again. Your
            challenge is to keep thinking and looking and spotting opportunities
            to add numbers where they haven’t already been placed. For example,
            if the top row of a Sudoku puzzle already has the numbers 1, 7, 8,
            5, 9 and 2, this means that the row still needs numbers 3, 4, and 6.
            Look in the nearby rows (within the same squares) to see if you can
            rule out any of those three missing numbers.
          </p>
          <img
            src="https://sudoku.com/img/post-images/Sudoku-Example-2.jpg"
            alt="sudoku-board"
            id="tips-content-image"
          />
          <p>
            <strong>Don't guess: </strong>Sudoku does not require guesswork. If
            you aren’t sure if a number belongs in a certain spot, you’re better
            off not guessing.
          </p>
          <p>
            <strong>Keep Moving: </strong>Sudoku rewards the “roving eye” – if
            you feel stuck, don’t concentrate too hard on one part of the puzzle
            grid. Instead, let your eye and your mind wander to a different
            place on the grid where you haven’t placed any numbers yet, and see
            which new possibilities become apparent to you.
          </p>
          <p>
            <strong>Constantly re-evaluate: </strong>Every time you place a new
            number on the Sudoku grid, you should ask yourself, “What changed?
            What do I know now, as a result of having placed that number? For
            example, if you successfully place a number 5 in a horizontal row,
            how does that 5 affect what’s going on in the neighboring squares?
            Every single time you place a number, it gives you an opportunity to
            potentially place more numbers in nearby rows and squares (depending
            on which other numbers in those places are already known). This is
            one of the most satisfying aspects of playing Sudoku – every step in
            solving the puzzle leads you closer to the conclusion.
          </p>
          <p>
            Sudoku is a fun and intellectually stimulating game because it
            exercises the part of the brain that craves logic, order and a
            natural progression toward a satisfying conclusion. Even if you’re a
            Sudoku beginner, we’re sure that you’ll find a lot to love about
            this game. Happy number hunting!
          </p>
          <p>
            <strong>
              Above is just some basic tips on solving sudoku. Please see{" "}
              <a
                href="https://sudoku.com/how-to-play/how-to-solve-sudoku-puzzles-real-tips-and-advice-part-1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              for more advanced tips and advice.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tips;
