// 1 - get a handle on the node you want to create / update

// 2 - update the proper key / values

// 3 - add it to the dom 


//create a 10 x 10 grid


const grid = document.getElementById("canvas")

function makeCells(num) {

    // Creates rows
    for (c = 0; c < num; c++) {
        let cell = document.createElement("div");
        grid.appendChild(cell).className = "cell";
    };
};

const cellCreation = makeCells(100)



const palettes = document.querySelectorAll("palette")

// for (let palette of palettes) {
//     pallete.addEventListener("click", (event) => {
//     //   const currentColor =  event.target
//     })
// }
// console.log(palette)


