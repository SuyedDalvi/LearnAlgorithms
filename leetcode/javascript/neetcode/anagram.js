
function groupAnagrams(strs){
    const result = new Map();

    strs.map( (str) => {
            const sortedStr = str.split("").sort().join("");

            if(result.has(sortedStr)){
                result.get(sortedStr).push(str);
            }else{
                result.set(sortedStr,new Array(str))
            }

    });


    const returnVal = new Array();

    
       for(const val of result.values()){
            returnVal.push(val) ;
      }
 
      return returnVal;
}



// Test

const input = ["act", "ate", "eat", "tan", "cat"]
console.log(groupAnagrams(input));