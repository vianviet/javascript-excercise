const beginTime = Date.now();
const waitBlocking = (miliSeconds) => {
    const startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds);
}
const waitNonBlocking = (miliSeconds) => {
    return new Promise((resolve) => setTimeout(resolve, miliSeconds));
}
const controller1 = async(name, req, res) => {
    console.log("Begin controller 1 of request", name);
    await waitNonBlocking(10000);
    console.log("Finish Controller 1 of request", name, "in", Date.now() - beginTime, "ms");

}

// Nếu chưa cải thiện thì thời gian chờ để request 1 hoàn thành là 30s
// const controller2 = (name, req, res) => {
//     console.log("Begin controller 2 of request", name);
//     waitBlocking(10000);
//     console.log("Finish Controller 2 of request", name, "in", Date.now() - beginTime, "ms");
// }


const controller2 = (name, req, res) => {
    console.log("Begin controller 2 of request", name);
    setTimeout(() => {
        waitBlocking(10000);
        console.log("Finish Controller 2 of request", name, "in", Date.now() - beginTime, "ms")
    }, 0);
}

const request = async(name) => {
    await controller1(name);
    controller2(name);
};
request(1);
request(2);
request(3);

// async function Action() {
//     await request(1);
//     await request(2);
//     await request(3);
// }
// Action();