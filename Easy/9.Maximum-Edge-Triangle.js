// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

function maxEdge(sideOne, sideTwo){
    return (sideOne + sideTwo) - 1
}

let total = maxEdge(3, 7)

console.log(total)