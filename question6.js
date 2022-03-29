const object = {
    name: "vianviet",
    age: 23,
    language: {
        java: true,
        javascript: false,
        php: false
    },
    getName() {
        console.log(this.name);
    }
};
// Shadow Clone (1), (2)
// (1)
const shadowclone1 = {
    ...object,
};

// (2)
const shadowclone2 = Object.assign({}, object);

// Deep Clone (3)
const deepclone = JSON.parse(JSON.stringify(object));

//What is different between Shadow Clone and Deep Clone

// Shadow clone : sao chép toàn bộ dữ liệu nguyên thủy dựa trên dữ liệu gốc, 
// nếu dữ liệu gốc bị thay đổi thì giá trị của bản sao sẽ thay đổi theo.
object.language.javascript = true;
console.log(shadowclone1);
//Deep clone : tạo ra 1 bản sao mới từ dữ liệu gốc với 1 số kiểu dữ liệu bị hạn chế sao chép,
// dữ liệu gốc thay đổi thì bản sao vẫn giữ giá trị trước đó.
console.log(deepclone);