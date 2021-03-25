let myArr = [];
function* multiplication(x) {
    for (let i = 0; i < 3; i++) {
        x = x * 2;
        myArr.push(x);
        yield x;
    };
};
    let num = multiplication(3);

    console.log(num.next().value);
    console.log(num.next().value);
    console.log(num.next().value);
for (let multiplication of num) {
    console.log(multiplication);
}
console.log(myArr);
module.exports = multiplication;