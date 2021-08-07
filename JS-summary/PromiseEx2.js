const f1 = (callback) => {
    setTimeout( () => {
        console.log("1번 주문 완료");
        callback();
    }, 2000);
};

const f2 = (callback) => {
    setTimeout( () => {
        console.log('2번 주문 완료');
        callback();
    }, 2000);
};

const f3 = (callback) => {
    setTimeout(() => {
        console.log('3번 주문 완료');
        callback();
    }, 2000);
};

console.log('시작');

// Callback Hell.....
f1(function(){
    f2(function(){
        f3(function(){
            console.log("끝");
        });
    });
});

