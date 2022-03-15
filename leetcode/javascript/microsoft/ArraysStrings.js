
function reverseWords(str) {

    return str.split(" ").reverse().reduce((acc, curr) => {
        if(curr.length > 0) {
            acc += ' ' + curr;
        }
        return acc;
    });
    
}
// console.log(reverseWords("the sky is blue"));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   
    let map = new Map();
    let returnValue = [];
    for(let i = 0; i<nums.length; i++){
        if(map.has(nums[i])){
            returnValue.push(map.get(nums[i]), i);
            break;
        }else {
            map.set(target-nums[i],i);
        }
    }
    return returnValue;
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

 var groupAnagrams = function(strs) {
    
    let output = new Map();

    strs.forEach((str) => {
        let key = str.split("").sort().join("");
        if(output.has(key)){
            let anagram = output.get(key);
            anagram.push(str);
            output.set(key,anagram);
        } else {
            let anagram = [str];
            output.set(key, anagram);
        }

    });

    return Array.from(output.values());
};
//function expression can be called only after they are defined.
// let anagrams = groupAnagrams(['bar', 'eat', 'tea']);

// console.log(anagrams);

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring_old = function(s) {
    let map = new Map();
    let maxlength = 0;
    let length = 0;
    let i=0, j=0;
    while(i< s.length) {
        if(map.has(s[i])){
            console.log(length);
            maxlength = Math.max(maxlength, i - j);
            
            // console.log(map);
            j = map.get(s[i])+ 1;
            
        } else {
            length++;            
        }
        map.set(s[i], i);
        i++;
    }
    return i - j == length ? length : maxlength;

};

// function statement can be called anywhere
// console.log(lengthOfLongestSubstring("ohomm"));
function lengthOfLongestSubstring(s) {
    let indexMap = {};
    let maxlength = 0;
    let i=0, j=0;
    while(i< s.length) {
        if(s[i] in indexMap){
     
            j = Math.max(indexMap[s[i]],j);
            
        } 
        maxlength = Math.max(maxlength, i - j + 1);
        indexMap[s[i]] = i+1;
        
        i++;
    }
    return maxlength;


};



/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {

    // reverse
    matrix.reverse();    
    displayMatrix(matrix);
    console.log("--");

    // transpose
    for(let i=0; i<matrix.length ; i++) {
        for(let j = 0; j < i ; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    displayMatrix(matrix);

    return matrix;
};

// let matrix =  [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]] ;
// displayMatrix(matrix);
// console.log("--")
// matrix = rotate(matrix);


function displayMatrix(matrix) {

    matrix.forEach((row) => {
        let  valStr = ""
        row.forEach(val => valStr += ' ' + val  );
        console.log(valStr);
    });
}

// transpose = m => m[0].map((x,i) => {
//     m.map(x => x[i])
// })
// console.log(transpose(matrix));

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    let zeroRows = [];
    let zeroCols = [];
    matrix.forEach((row, rindex) => {
        row.forEach((val, cindex) => {
            if(val === 0) {
                zeroRows[rindex] = 1;
                zeroCols[cindex] = 1;
            } 
        });
    });
    
    console.log(zeroRows, zeroCols);
    
    // for(let r = 0; r < matrix.length; r++) {
        
    //     if(zeroRows[r] === 1) {
    //         matrix[r].forEach((val,index) => {
    //             matrix[r][index] = 0;
    //         });    
    //     }

    //     for(let c=0;c < matrix[0].length; c++){
    //         if(zeroCols[c] === 1) {
    //             matrix[r][c] = 0;
    //         }
    //     }

    // }

    for(let r = 0; r < matrix.length; r++){
        for(let c =0; c< matrix[0].length; c++){
            if(r in zeroRows || c in zeroCols) {
                matrix[r][c] = 0;
            }
        }
    }

    console.log(matrix);
};

// setZeroes([[1,1,1],[1,0,1],[1,1,1]]);


/**
 * Incorrect attempt
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder_fail = function(matrix) {
    
    const moveRightwards = 0, moveDownwards = 1, moveLeftwards=2, moveUpwards=3;
    const returnVal = [];
    let  row=0, col=0, totalElements = matrix.length * matrix[0].length, boundary=0;
    
    let nextDirection = moveRightwards;
    while(totalElements > returnVal.length ){

        row = boundary ;
        col = boundary ;
        // move right
        if(nextDirection === moveRightwards){
            do{
                returnVal.push(matrix[row][col]);
                col++;
            }while(col<matrix[0].length - boundary - 1) 
            nextDirection = moveDownwards;

            if(totalElements == returnVal.length) {
                break;
            }
        }
        console.log(returnVal);

        //move down
        if(nextDirection === moveDownwards) {
            while(row < matrix.length - boundary - 1 ){
                returnVal.push(matrix[row][col]);
                row++;
            }
            nextDirection = moveLeftwards;
            

        }
        console.log(returnVal);

        //move left
        if(nextDirection === moveLeftwards){
            while(col > boundary ){
                returnVal.push(matrix[row][col--]);
            }
            nextDirection = moveUpwards
            
        }
        console.log(returnVal);


        //move up
        if(nextDirection === moveUpwards){
            while(row > boundary ) {
                returnVal.push(matrix[row--][col]);
            }
            nextDirection = moveRightwards
            
        }
        console.log(returnVal);
        boundary++;
    }
    
    console.log(returnVal);
    
    
};

var spiralOrder = function (matrix) {

    let returnVal = [];

    let rows = matrix.length;
    let cols = matrix[0].length;

    let top = 0;
    let down = rows - 1;
    let left = 0;
    let right = cols - 1;

    while(rows*cols > returnVal.length){

        // move right
        for (let col = left; col <= right; col++) {
            returnVal.push(matrix[top][col]);
        }

        for (let row = top + 1; row <= down; row++) {
            returnVal.push(matrix[row][right]);
        }

        if(top != down){
            for (let col = right - 1; col >= left; col--) {
                returnVal.push(matrix[down][col])
            }
        }
        

        if(left != right){
            for(let row = down - 1; row > top; row--) {
                returnVal.push(matrix[row][left])
            }
        }
        


        left++;
        right--;
        top++;
        down--;

    }

    return returnVal;

}

const matrix = [[1,12]];
console.log(spiralOrder(matrix));