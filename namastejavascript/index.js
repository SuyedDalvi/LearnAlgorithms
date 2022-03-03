console.log('Hello world');

const errorLog = console.error.bind();

errorLog("Error");




// const sum = x => y => y ? sum(x+y) : x;

console.log(sum(1)(2)());


function sum(x)  {
    return (y) => {
        return y?sum(x+y):x;
    }
}