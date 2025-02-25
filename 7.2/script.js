let arr = [];
let arrLength = parseInt(prompt('Яка буде довжина масива?', ''));

for(let i = 0; i < arrLength; i++) {
    let arrElem = prompt('Введіть елемент масива #'+ (i + 1), '');
    arr.push(arrElem);
}

console.log(arr);

let sum = 0, numbers = 0;

function showArithmetic(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(!isNaN(arr[i])) {
            sum += +arr[i];
            numbers++;
        }
    }
    return sum / numbers;
}

document.write(showArithmetic(arr));