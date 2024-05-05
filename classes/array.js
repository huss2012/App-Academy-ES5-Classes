// Your code here

//1. Add isEqual function to the Array's Prototype:
Array.prototype.isEqual = function (array) {
    if (this.length !== array.length) {
        return false;
    }
    for (let i = 0; i < array.length; i++){
        if (this[i] !== array[i]) {
            return false;
        }
    };
    return true;
}

//--------------Local Test Area----------------
console.log([1, 2, 3].isEqual([1, 2, 3]));//true
console.log([1, 2, 3].isEqual([1, 2, 3, 2]));//false
