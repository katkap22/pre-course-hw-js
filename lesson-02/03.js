
const giveMeRightNumbers = (value1, value2, maximum) => {
    if (value1 === value2 || value1 <= value2) {
        console.log('Success!');
    } else {
        console.log('Something wrong!');
    }
}
giveMeRightNumbers(101, 100, 200)