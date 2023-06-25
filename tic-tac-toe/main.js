// 1 - get a handle on the node you want to create / update

// 2 - update the proper key / values

// 3 - add it to the dom 



 document.onload =
    function makeCells(num) {
  const board = document.getElementsByClassName("tic-tac-toe")
      // Creates cells
      for (c = 0; c < num; c++) {
          let cell = document.createElement("div");
          board.appendChild(cell).className = "empty square";
      };
  };
  
  const cellCreation = makeCells(9)
  
  console.log(cellCreation)
  





//   const div = document.createElement("div");
    
//   div.className = "empty square";
//   div.style = "background-color: black ;";
//   document.main.appendChild(div);