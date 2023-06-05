//grid input
const wrap = 10;

//grid will be wrap by wrap in size
const grid = [];
const cells = wrap ** 2;

//row holds values before they are added to grid
let row;

//create a multiplication table based on wrap
for (let x = 0; x < cells + 1; x++) {
  if (x % wrap == 0) {
    //row break condition
    if (row != undefined) {
      //row has data
      grid.push(row);
    }
    //new row
    row = [];
  }
  //value is column * row
  row.push(Math.floor(x/wrap) * (x % wrap));
}

//display table
console.table(grid);