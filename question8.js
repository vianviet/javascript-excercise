const a = () => {
    console.log('a');
};
const b = () => {
    console.log('b');
};
const c = async() => {
    console.log('c')
};
const main = () => {
    setImmediate(b);
    process.nextTick(a);
    c();
};
main();
//Result
//c
//a
//b

// Độ ưu tiên trong Callback queue lần lượt là Microtask > Macrotask > Render Queue
// Hàm async c thuộc Microtask nên nó được ưu tiên thực thi trước
// nextTickQueue sẽ được xử lý sau khi hoạt động hiện tại hoàn thành, 
// bất kể giai đoạn hiện tại của event loop chỉ sau async
// process.netTick(a) sẽ được set vào trước event loop chỉ sau async.
// Nên nó sẽ chạy trước setImmediate, kể cả setTimeout và một số khác.