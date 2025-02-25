let userString = prompt('Введіть рядок');
let userSimbols = prompt('Введіть символи для видалення через пробіл');

let simbArr = userSimbols.split(' ');
let strArr = userString.split('');
let resultArr = [];

function delSimbols(str, simbols) {
    for(let i = 0; i < str.length; i++) {
        let isAdd = true;
        for(let j = 0; j < simbols.length; j++) {
            if(str[i] === simbols[j]) {
                isAdd = false;
            }
        }
        if(isAdd) {
            resultArr.push(str[i]);
        }
    }
    return resultArr.join('');
}

document.write(delSimbols(strArr, simbArr));