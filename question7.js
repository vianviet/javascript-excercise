async function forAsync(arr) {
    for (let each of arr) {
        await console.log(each);
    }
}
const controller = (req, res) => {
    const arr = Array.from(Array(10).keys());
    forAsync(arr);
};
controller();
controller();
controller();