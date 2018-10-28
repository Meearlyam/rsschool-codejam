make = function(...array) {
    const args = [];
    const inner = (...temp) => {
        if(typeof temp[0] === 'function') {
            return args.reduce(temp[0]);
        }
        else {
            args.push(...temp);
            return inner;
        }
    };
    return inner(...array);
}

console.log(make(15)(34, 21, 666)(41)(sum)); // return 777

function sum(a, b) {
    return a + b;
}