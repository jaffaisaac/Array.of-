const arr1 = Array.of(1,2,3,4,5)
console.log(arr1)
const arr2  =Array.of('A','B','C');
console.log(arr2)

const maxArray = Array.of('x' ,'y',...arr1,...arr2)
console.log(maxArray) //['x', 'y', 1,   2,   3  ,4,   5,   'A', 'B', 'C']
console.log(maxArray.length)