

const maxDifference = (array) => {

    let minVal = array[0];
    let maxDif = -1;
    for(let i=1; i<array.length; i++){
        
        if(array[i] > minVal){
            maxDif = Math.max(array[i]-minVal, maxDif);           
        }
        minVal = Math.min(array[i], minVal)
        
    }
    return maxDif;
}

console.log(maxDifference([7,5,3,2]));