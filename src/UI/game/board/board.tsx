import React, { ReactNode } from 'react';
import classes from './board.module.css';
import Cell from '../ship/cell';
import { board, grid } from '../../../type';

type props = {
  board: board;
  children?: ReactNode;
};
function Board(props: props) {
  function createGrid() {
    let boardgrid: JSX.Element[] = [];
    for (let key in props.board.grid) {
      let gridKey = Number(key) as keyof grid;
      props.board.grid[gridKey].forEach((el, index) => {
        let status =
          typeof el === 'string'
            ? el
            : typeof el[1] === 'number'
            ? 'alive'
            : el[1];
        boardgrid.push(
          <div key={`${gridKey}-${index}`} className={classes.gridEl}>
            <Cell dataRow={gridKey} dataCol={index} status={status} />
          </div>
        );
      });
    }
    return boardgrid;
  }
  return (
    <div className={classes.board}>
      {createGrid().map((el) => el)}
      <div>{props.children}</div>
    </div>
  );
}

export default Board;
