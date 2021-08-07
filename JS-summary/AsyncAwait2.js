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
            // resolve("2번 주문 완료");
            reject(new Error("err....."));
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

// await 는 async 안에서만 사용가능하다.
// async/await 문에서는 reject 되면 catch블럭 대신에 try/catch로 감싸면 된다.
async function order() {
    try{
        const result1 = await f1();
        const result2 = await f2(result1);
        const result3 = await f3(result2);
        console.log(result3);
    }catch(e){
        console.log(e);
    }
    console.log('종료');
}
order();




// f1()
//     .then((resolve) => f2(resolve))
//     .then((resolve) => f3(resolve))
//     .then((resolve) => console.log(resolve))
//     .catch(console.log)
//     .finally(() => {
//         console.log("--끝--");
//     });