import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about">
      <header id="about-header">
        <div id="about-wraper">
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
      <div className="body">
        <h2 style={{ color: "#344861" }}>About Sudoku</h2>
        <img
          src="https://previews.123rf.com/images/juliasudnitskaya/juliasudnitskaya1502/juliasudnitskaya150200067/36775373-crossword-sudoku-and-pencil-popular-puzzle-game-with-numbers.jpg"
          alt="img"
          id="img"
        />
        <div class="content">
          <h3>About</h3>
          <p>
            Sudoku (originally called Number Place) is a logic-based,
            combinatorial number-placement puzzle. In classic sudoku, the
            objective is to fill a 9×9 grid with digits so that each column,
            each row, and each of the nine 3×3 subgrids that compose the grid
            (also called "boxes", "blocks", or "regions") contain all of the
            digits from 1 to 9. The puzzle setter provides a partially completed
            grid, which for a well-posed puzzle has a single solution. Completed
            games are always an example of a Latin square, including an
            additional constraint on the contents of individual regions. For
            example, the same single integer may not appear twice in the same
            row, column, or any of the nine 3×3 subregions of the 9×9 playing
            board.
          </p>

          <div id="example-image">
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/250px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png"
                alt="typical-sudoku-board"
                id="sudoku-board"
              />
              <p
                style={{
                  marginTop: "-8px",
                  color: "#344861",
                }}
              >
                A typical sudoku board ...
              </p>
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Sudoku_Puzzle_by_L2G-20050714_solution_standardized_layout.svg/250px-Sudoku_Puzzle_by_L2G-20050714_solution_standardized_layout.svg.png"
                alt="typical-sudoku-solution"
                id="sudoku-board"
              />
              <p
                style={{
                  marginTop: "-8px",
                  color: "#344861",
                }}
              >
                ... and its solution
              </p>
            </div>
          </div>

          <h3>History</h3>
          <p>
            The history of Sudoku dates back to an 18th Century Swiss
            mathematician’s game called “Latin Squares” (according to this
            article from the Economist) and some of the first number puzzles to
            appear in newspapers were published in France in 1895. But the
            modern game of Sudoku as we recognize it today was invented by
            Howard Garns, a freelance puzzle inventor from Connersville,
            Indiana, USA in 1979 when it was published in Dell Pencil Puzzles
            and Word Games magazine. The puzzle was known as “Number Place,”
            since it involved placing individual numbers into empty spots on a 9
            x 9 grid.
          </p>
          <p>
            The game first appeared in Japan in 1984 where it was given the name
            “Sudoku,” which is short for a longer expression in Japanese – “Sūji
            wa dokushin ni kagiru” – which means, “the digits are limited to one
            occurrence.” Sudoku continues to be highly popular in Japan, where
            people buy over 600,000 Sudoku magazines per month.
          </p>
          <p>
            One reason that Sudoku puzzles are so beloved in Japan is because
            the Japanese language doesn’t work very well for crossword puzzles –
            so a number puzzle was much more successful in Japanese culture.
            Also, Japan tends to love puzzles, since it is a country where
            millions of people make lengthy commutes by train or bus, and they
            need to kill time while waiting for the next stop.
          </p>
          <p>
            The man who reintroduced Sudoku “back” to the Western world was a
            New Zealand judge named Wayne Gould, who was on vacation in Tokyo in
            March 1997 when he discovered Sudoku in a bookstore. He quickly
            became a devoted enthusiast of Sudoku and spent the next six years
            developing a computer program that could generate Sudoku puzzles.
          </p>
          <p>
            The Times of London began publishing Sudoku puzzles in 2004, and the
            first U.S. newspaper to feature Sudoku was The Conway (New
            Hampshire) Daily Sun in 2004. Within the past 10 years, Sudoku has
            become a global phenomenon. The first World Sudoku Championship was
            hosted in Italy in 2006 and the 2013 World Sudoku Championship will
            be held in Beijing.
          </p>
          <h3>Competitions</h3>
          <ul>
            <li>
              The first World Sudoku Championship was held in Lucca, Italy, from
              March 10 to 12, 2006. The winner was Jana Tylová of the Czech
              Republic.[40] The competition included numerous variants.
            </li>
            <li>
              The second World Sudoku Championship was held in Prague, Czech
              Republic, from March 28 to April 1, 2007.[42] The individual
              champion was Thomas Snyder of the USA. The team champion was
              Japan.
            </li>
            <li>
              The third World Sudoku Championship was held in Goa, India, from
              April 14 to 16, 2008. Thomas Snyder repeated as the individual
              overall champion, and also won the first ever Classic Trophy (a
              subset of the competition counting only classic Sudoku). The Czech
              Republic won the team competition
            </li>
            <li>
              The fourth World Sudoku Championship was held in Žilina, Slovakia,
              from April 24 to 27, 2009. After past champion Thomas Snyder of
              the USA won the general qualification, Jan Mrozowski of Poland
              emerged from a 36-competitor playoff to become the new World
              Sudoku Champion. Host nation Slovakia emerged as the top team in a
              separate competition of three-membered squads.
            </li>
            <li>
              The fifth World Sudoku Championship was held in Philadelphia,
              Pennsylvania, from April 29 to May 2, 2010. Jan Mrozowski of
              Poland successfully defended his world title in the individual
              competition, while Germany won a separate team event. The puzzles
              were written by Thomas Snyder and Wei-Hwa Huang, both past U.S.
              Sudoku champions.
            </li>
            <li>
              The 12th World Sudoku Championship (WSC) was held in Bangalore,
              India, from October 15 to 22, 2017. Kota Morinishi of Japan won
              the Individual WSC and China won the team event.
            </li>
            <li>
              The 13th World Sudoku Championship took place in the Czech
              Republic.
            </li>
            <li>
              In the United States, The Philadelphia Inquirer Sudoku National
              Championship has been held three times, each time offering a
              $10,000 prize to the advanced division winner and a spot on the
              U.S. National Sudoku Team traveling to the world championships.
              The winners of the event were Thomas Snyder (2007), Wei-Hwa Huang
              (2008), and Tammy McLeod (2009). In the 2009 event, the
              third-place finalist in the advanced division, Eugene Varshavsky,
              performed quite poorly onstage after setting a very fast
              qualifying time on paper, which caught the attention of organizers
              and competitors including past champion Thomas Snyder, who
              requested organizers reconsider his results due to a suspicion of
              cheating. Following an investigation and a retest of Varshavsky,
              the organizers disqualified him and awarded Chris Narrikkattu
              third place.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;
