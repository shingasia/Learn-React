const f1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Result Of f1");
        }, 1000);
    });
};

const f2 = (beforeResult) => {
    console.log(beforeResult);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(beforeResult);
        }, 1000);
    });
};

const f3 = (beforeResult) => {
    console.log(beforeResult);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(beforeResult);
            reject(beforeResult);
        }, 1000);
    });
};

const f4 = (beforeResult) => {
    console.log(beforeResult);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(beforeResult);
        }, 1000);
    });
};

const f5 = (beforeResult) => {
    console.log(beforeResult);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(beforeResult);
        }, 1000)
    });
};

f1()
    .then((data) => f2(data))
    .then((data) => f3(data))
    .then((data) => f4(data))
    .then((data) => f5(data))
    .catch((data) => {
        console.log('catched = '+data);
    })
    .finally(() => {
        console.log('-- 끝 --');
    });
// 결과 =============================================================================================
// 1) 전부다 resolve 했을때 -> 1초 간격으로 'Result Of f1'이 4번 출력되고 -- 끝 --
/*
    Result Of f1
    Result Of f1
    Result Of f1
    Result Of f1
    -- 끝 --
*/

// 2) f3에서 reject 했을때 -> 1초 간격으로 'Result Of f1'이 2번 출력되고 'catched = Result Of f1'이 출력됨
/*
    Resulf Of f1
    Resulf Of f1
    catched = Resulf Of f1
    -- 끝 --
*/
