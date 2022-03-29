const beginTime = Date.now();
const random = (number) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(number);
        console.log("finish work: " + number + " in ", Date.now() - beginTime, " ms");
    }, Math.round(Math.random() * 10000));
});

const action = async() => {
    for (let i = 0; i < 20; i++) {
        random(i);
    }

}
for (let i = 0; i < 5; i++) {
    action();
}