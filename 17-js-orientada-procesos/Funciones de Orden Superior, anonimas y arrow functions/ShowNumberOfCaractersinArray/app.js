const { Console } = require("console-mpds");
const console = new Console();

//Function shows number of characters in every position of array

const languagesArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C', 'Perl', 'Ruby', 'Swift'];

function mapForEach(arr, fn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i]));
    }

    return newArray;
}

const lenArray = mapForEach(languagesArray, function (item) {
    return item.length;
});


console.writeln(lenArray);