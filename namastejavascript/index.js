// Behavior
let printFullName = function (...tenants) {
    console.log(arguments);
    console.log("Owner: " + this.firstName + " " + this.lastName)
    tenants.forEach(x => console.log("Tennant: " + x.firstName + " " + x.lastName));
    
}

let owner = {
    firstName: "Suyed",
    lastName: "Dalvi"
}

let tennants = [
    {
        firstName: "Gautom",
        lastName: "Saud"
    },
    {
        firstName: "Venkatesh",
        lastName: "Koya"
    }
]

// Call - the second arg is passed as a object
let [temp1, temp2] = tennants;
printFullName.call(owner, temp1, temp2);



// Apply - the second arg is passed as array
printFullName.apply(owner, tennants);


// Bind - Creates a copy of function that can be invoked later
//
 
const displayMemberNames = printFullName.bind(owner, ...tennants);
displayMemberNames();




// Function Currying
console.log(sum(1)(2)());

function sum(x)  {
    return (y) => {
        return y?sum(x+y):x;
    }
}

// High order functions
const TWO_PI = 2 * Math.PI;

var calcDiameter = (r) => r * 2;

var calcArea = (r) => Math.PI * Math.pow(r,2);

var calcCircum = (r) => TWO_PI * r;

Array.prototype.circle = function (parameters) {
    let output = [];
    for(let i=0; i< this.length; i++){
        output.push(parameters(this[i]));
    }
    return output;
}

let radius = [2,3,4,5];
console.log(radius.circle(calcDiameter))
console.log(radius.circle(calcArea));
console.log(radius.circle(calcCircum))