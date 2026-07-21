function abc() {
  let array = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array[i] = "TicTac";
    } else if (i % 5 === 0) {
      array[i] = "Tac";
    } else if (i % 3 === 0) {
      array[i] = "Tic";
    } else {
      array[i] = i;
    }

    // switch (i) {
    //   case i % 3 === 0:
    //     array[i] = "Tic";
    //   // console.log("Tic");
    //   case i % 5 === 0:
    //     array[i] = "Tac";
    //   // console.log("Tac");
    //   case i % 3 === 0 && i % 5 === 0:
    //     array[i] = "TicTac";
    //   // console.log("TicTac");
    //   default:
    //     array[i] = i;
    // }
  }
  return array.join(" ");
}
console.log(abc());
