var object = {
    name: 'vianviet',
    language: 'fullstack'
};

// Con trỏ this để xác định đối tượng của tham số object truyền vào sau khi sử dụng 3 hàm trên apply,call,bind
function Action(a, b) {
    console.log(this.name + ' ' + a + ' ' + this.language + ' ' + b);
}

// .apply(): Thực hiện trên 1 hàm và truyền vào một object cùng với mảng chứa các đối số của hàm tương ứng
Action.apply(object, ["want to become a", "developer"]);
// .bind(): Tạo ra 1 hàm mới, thực hiện trên 1 hàm trước đó và truyền vào một object cùng với các đối số của hàm tương ứng
const doBind = Action.bind(object, "try harder to become a", "developer");
doBind();
// .call() : Thực hiện trên 1 hàm và truyền vào một object cùng với các đối số của hàm tương ứng
Action.call(object, "is a", "developer");



// Sự giống nhau giữa 3 hàm apply, call, bind :
// - Sử dụng con trỏ this để xác định tham số đối tượng truyền vào
// - Truyền tham số cho hàm

// Sự khác nhau giữa 3 hàm apply, call, bind :
// - bind : phải tạo ra hàm mới
// - apply : tham số sau phải truyền vào là 1 mảng và mỗi giá trị của mảng là tham số của hàm đã sử dụng để gọi
// - bind, call : tham số truyền vào tương ứng giá trị tham số của hàm đã sử dụng để gọi