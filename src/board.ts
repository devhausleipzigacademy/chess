// const state = {
//     "a-1": "rook",
//     "a-2": null,
//     "a-3": null,
//     "a-4": "pawn",
// }

type Position = `${string}-${number}`;
type PossiblePiece = null | string;
type BoardState = Record<Position, PossiblePiece>;

const chars = ["a", "b", "c", "d", "e", "f", "g", "h"];

export class Board {
  private _state: BoardState = {};
  boardElement: HTMLElement;

  // Called during instanciation
  constructor() {
    // Iterate over all files (8 times)
    // In code solution
    // for (let i = 8; i >= 1; i--) {
    //     for (let j = 0; j < chars.length; j++) {
    //         //  create position string
    //     const position: Position = `${chars[j]}-${i}`;
    //     // put the position into the state object
    //     this._state[position] = null;
    //     }

    // }
    // CSS Solution -> see style.css
    for (let i = 0; i < chars.length; i++) {
      // For every character produce a number from 1 - 8 (8 times)
      for (let j = 1; j <= 8; j++) {
        // create position string
        const position: Position = `${chars[i]}-${j}`;
        // put the position into the state object
        this._state[position] = null;
      }
    }
    // create board div
    this.boardElement = document.createElement("div");
    this.boardElement.id = "board";
    // mount it to the app
    document.querySelector("#app")?.appendChild(this.boardElement);
  }

  drawBoard() {
    // let black = true
    // let count = 1
    for (const position in this._state) {
      // create a div
      const square = document.createElement("div");
      // give it an id
      square.id = position;
      const [file, rank] = position.split("-");
      const positionValue = chars.indexOf(file) + 1 + parseInt(rank);
      square.classList.add(
        positionValue % 2 === 0 ? "black-square" : "white-square"
      );
      // put it on the board
      this.boardElement.appendChild(square);

      //   black = count % 8 === 0 ? !!black : !black
      //   count ++
    }
    this.boardElement.addEventListener("click", (e) => console.log(e.target));
  }

  printState() {
    console.table(this._state)
  }
}
