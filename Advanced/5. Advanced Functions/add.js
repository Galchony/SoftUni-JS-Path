function solution(num) {
    return function add(value) {
        return num + value;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
