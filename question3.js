const beginTime = Date.now();

function doA() {
    console.log("begin doA");
    const beginTime = Date.now();
    while (Date.now() - beginTime < 10000) {}
    console.log("finish doA in ", Date.now() - beginTime);
}

function doB() {
    return new Promise((resolve, reject) => {
        console.log("Begin doB");
        const beginTime = Date.now();
        setTimeout(() => {
            console.log("finish doB in ", Date.now() - beginTime);
            resolve("doB");
        }, 1000);

    })
}
const controller = async(name) => {
    console.log("begin controller", name);
    doA();
    await doB();
    console.log("finish controller", name);
};
// Trường hợp 1 (gọi cả 3 controller theo cách đồng bộ) : Tổng thời gian phản hồi cho 3 request là 33 giây, ưu tiên xử lý doA của cả 3 controller trước sau đó mới xử lý xử lý doB của mỗi controller
// nên controller 1 phải đợi đến giây thứ 31 mới đc hoàn thành

// controller(1);
// console.log("in", Date.now() - beginTime);
// controller(2);
// console.log("in", Date.now() - beginTime);
// controller(3);
// console.log("in", Date.now() - beginTime);

// --> Giải pháp
// Trường hợp 2 (gọi cả 3 controller theo bất đồng bộ ) : Tổng thời gian phản hồi cho 3 request là 33 giây, controller nào gọi trước xử lý trước
// thời gian controller 1 hoàn thành trong giây thứ 11 

async function Action() {
    await controller(1);
    console.log("in", Date.now() - beginTime)
    await controller(2);
    console.log("in", Date.now() - beginTime)
    await controller(3);
    console.log("in", Date.now() - beginTime)
}
Action();