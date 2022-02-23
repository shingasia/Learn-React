const f1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Result Of f1");
        }, 1000);
    });
};

const f2 = (beforeResult) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(beforeResult);
        }, 1000);
    });
};

const f3 = (beforeResult) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(beforeResult);
        }, 1000);
    });
};

const f4 = (beforeResult) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(beforeResult);
            // reject(new Error('f4 에서 거부'));
        }, 1000);
    });
};

const f5 = (beforeResult) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(beforeResult);
        }, 1000)
    });
};

console.time("x");
Promise.all([f1(), f2(), f3(), f4(), f5()]) // Promise.all(iterable)
    .then(SuccessValue => {
        console.log(SuccessValue);        // ['Result Of f1', undefined, undefined, undefined, undefined]
        console.log(SuccessValue.length); // 5
        console.timeEnd("x");
    })
    .catch(ErrorValue => {
        console.log(ErrorValue.message);
        console.timeEnd("x");
    });

// 결과 =============================================================================================

// 1) f1 부터 f5까지 모두 resolve할 경우 (then에 지정한 함수 실행)
//    Promise.all(iterable) 에서 반환한 프로미스의 이행 결과값은 매개변수(프로미스가 아닌 값을 포함하여)로 주어진 iterable 객체에 포함된 모든 값을 담은 배열이다.


// 2) f4에서 reject할 경우 'f4 에서 거부'라고 출력 (catch 에 지정한 함수 실행)

