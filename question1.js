function question1() {
    setTimeout(() => { console.log('hello event loop') }, 5000);
}
question1();