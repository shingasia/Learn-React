const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("OK");
        reject(new Error("err ...."));
    }, 3000);
});

console.log("시작");

pr.then((result) => {
    console.log(result)
}).catch( (err) => {
    console.log(err);
}).finally(() => {
    console.log('무조건 실행');
});