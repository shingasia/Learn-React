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


f1()
    .then((resolve) => f2(resolve))
    .then((resolve) => f3(resolve))
    .then((resolve) => console.log(resolve))
    .catch(console.log)
    .finally(() => {
        console.log("--끝--");
    });
