async function getName() {
    // return "Mike"; // async를 붙이면 기본적으로 Promise를 반환한다.
    // return Promise.resolve("Tom"); // 이렇게 Promise를 지정하면 그 프로미스를 리턴한다
    return new Error('err...'); // 그리고 에러가 발생하면 rejected 상태의 프로미스를 리턴한다.(catch 블럭으로 체크)
}


// getName().then((name) => {
//     console.log(name);
// });

getName().catch((err) => {
    console.log('Catch Error : '+err);
});