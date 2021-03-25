function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
};

function* insideGenerator1() {
    for (let i = 1; i <= 5; i++) {
        yield x = i;
    };
};

function* insideGenerator2() {
    for (let i = 6; i <= 9; i++) {
        yield x = i; }
};

function* insideGenerator3() {
    for (let i = 10; i <= 15; i++) {
        yield x = i;
    };
};


let fifteenArray = [];
const iterator = myGenerator();

for (let myGenerator of iterator) {
    fifteenArray.push("#",(iterator.next().value));
    if (fifteenArray.push((iterator.next().value)) = "undefined") {
       return fifteenArray.push((iterator.next().value));
    }
}

console.log(fifteenArray);
module.exports = { fifteenArray, myGenerator };