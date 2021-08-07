const f1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("1번 주문 완료");
        }, 1000);
    });
};

const f2 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2번 주문 완료");
            // reject('XXX');
        }, 3000);
    });
};

const f3 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("3번 주문 완료");
        }, 2000);
    });
};

console.log('시작');


// Promise.all
console.time("x");
Promise.all([f1(), f2(), f3()]).then((resolve) => {
    console.log(resolve);
    console.timeEnd("x");
});


// f1()
//     .then((resolve) => f2(resolve))
//     .then((resolve) => f3(resolve))
//     .then((resolve) => console.log(resolve))
//     .catch(console.log)
//     .finally(() => {
//         console.log("--끝--");
//     });
