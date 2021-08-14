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
            // reject('아.. 2번에서 문제 발생');
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
Promise.all([f1(), f2(), f3(), '안녕하세요']).then((resolve) => {
    console.log(resolve);  // 전부다 resolve 되면 -> ["1번 주문 완료", "2번 주문 완료", "3번 주문 완료", "안녕하세요"]
    console.timeEnd("x");
}).catch((reject) => {
    console.log(reject);  // 아.. 2번에서 문제 발생
    console.timeEnd("x");
})


// f1()
//     .then((resolve) => f2(resolve))
//     .then((resolve) => f3(resolve))
//     .then((resolve) => console.log(resolve))
//     .catch(console.log)
//     .finally(() => {
//         console.log("--끝--");
//     });
