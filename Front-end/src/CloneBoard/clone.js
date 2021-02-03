const clone = (board) => {
  const cloneBoard = board.reduce((accumulator, row) => {
    const cloneRow = row.map((attr) => Object.assign({}, attr));
    accumulator.push([...cloneRow]);
    return accumulator;
  }, []);
  return cloneBoard;
};
export default clone;
