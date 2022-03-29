//  Sự khác nhau giữa for và forEach
let arr = [1, 2, 3, 4, 5];
// 1. Về cơ bản 
// - for : phải xác định điều kiện dừng
function forTest() {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// forTest();
// - forEach : Không cần xác định điều kiện dừng
function forEachTest() {
    arr.forEach(each => { console.log(each) });
}
// forEachTest();


// 2. Về thoát khỏi vòng lặp (break) 
// - for : có thể dừng lại khi đang chạy vòng lặp
function forTest2() {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (i == 3) break;
    }
}
// forTest2();
// - forEach : không thể sử dụng break
function forEachTest2() {
    arr.forEach(each => {
        console.log(each);
        //if (item == 3) break; => break không xác định
    });
}
// forEachTest2();

// 3. Về Asynchronous thì :
// - for thì hoạt động bình thường
async function forTest3() {
    for (let i = 0; i < arr.length; ++i) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(arr[i]);
    }
}
forTest3();

// - forEach phát sinh lỗi 
// async function forEachTest3() {
//     arr.forEach((each) => {
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         console.log(each);
//     });
// }
// forEachTest3();