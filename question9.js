let promise1 = new Promise(resolve => resolve("Complete"));
let promise2 = new Promise(resolve => resolve("Complete"));
let promise3 = new Promise((resolve, reject) => reject("Error"));

const promises = [];
promises.push(promise1.catch((err) => err));
promises.push(promise2.catch((err) => err));
promises.push(promise3.catch((err) => err));

Promise.all(promises)
    .then(response => console.log(response))