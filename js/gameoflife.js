//npm run test:module1

function seed(...names) {
    return names;
}

function same([x, y], [j, k]) {
    if (x === j && y === k) {
        return true;

    } else {
        return false;
    }
}


// The game state to search for `cell` is passed as the `this` value of the function
function contains(cell) {
    let result = false;
    this.forEach(item => {
        if (cell[0] === item[0] && cell[1] === item[1]) {
            result = true;
        }
    })
    return result;
}

const printCell = (cell, state) => {
    return contains.call(state, cell) ? '\u25A3' : '\u25A2';
}

const corners = (state = []) => {
    if (state.length === 0) return { topRight: [0, 0], bottomLeft: [0, 0] }
    let max = Math.max
    let min = Math.min
    let x = state.map(coord => coord[0])
    let y = state.map(coord => coord[1])
    return { topRight: [max(...x), max(...y)], bottomLeft: [min(...x), min(...y)] };
}


const printCells = (state) => {};

const getNeighborsOf = ([x, y]) => {};

const getLivingNeighbors = (cell, state) => {};

const willBeAlive = (cell, state) => {};

const calculateNext = (state) => {};

const iterate = (state, iterations) => {};

const main = (pattern, iterations) => {};

const startPatterns = {
    rpentomino: [
        [3, 2],
        [2, 3],
        [3, 3],
        [3, 4],
        [4, 4]
    ],
    glider: [
        [-2, -2],
        [-1, -2],
        [-2, -1],
        [-1, -1],
        [1, 1],
        [2, 1],
        [3, 1],
        [3, 2],
        [2, 3]
    ],
    square: [
        [1, 1],
        [2, 1],
        [1, 2],
        [2, 2]
    ]
};

const [pattern, iterations] = process.argv.slice(2);
const runAsScript = require.main === module;

if (runAsScript) {
    if (startPatterns[pattern] && !isNaN(parseInt(iterations))) {
        main(pattern, parseInt(iterations));
    } else {
        console.log("Usage: node js/gameoflife.js rpentomino 50");
    }
}

exports.seed = seed;
exports.same = same;
exports.contains = contains;
exports.getNeighborsOf = getNeighborsOf;
exports.getLivingNeighbors = getLivingNeighbors;
exports.willBeAlive = willBeAlive;
exports.corners = corners;
exports.calculateNext = calculateNext;
exports.printCell = printCell;
exports.printCells = printCells;
exports.startPatterns = startPatterns;
exports.iterate = iterate;
exports.main = main;