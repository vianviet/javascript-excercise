async function waitAndMaybeReject() {
    await new Promise((resolve, reject) => {
        setTimeout(resolve("success"), 10000);
    });
    throw Error("This is error");
}
async function test1() {
    try {
        return await waitAndMaybeReject();
    } catch (error) {
        return "Oh no"; // Thiếu lỗi error ném ra ở hàm waitAndMaybeReject()
    }
}

async function test2() {
    try {
        return await waitAndMaybeReject(); // dư await
    } catch (error) {
        throw (error); //Không return về lỗi để gán vào value
    }
}
async function test3() {
    return await waitAndMaybeReject(); // dư await
    //Thiếu bắt lỗi và return giá trị để gán vào value
}
async function test4() {
    return waitAndMaybeReject();
    //Thiếu bắt lỗi và return giá trị để gán vào value
}

const main = async() => {
    const value = await test3()
    console.log("value: " + value)
}
main()