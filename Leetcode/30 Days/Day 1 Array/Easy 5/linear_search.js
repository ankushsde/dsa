// WAP to check if a zero is present or not

const arr = [10,8,4,5,6,7,0]
const target = 0
let isZeroPresent = false;
const findZero = function(arr,target){

    for (let i = 0; i<arr.length; i++) {
        if (arr[i] === target) {
            isZeroPresent =  true;
            // break;
        }
    }

}

findZero(arr,target)
if(isZeroPresent === true){
    console.log("Target element is present")
} else {console.log("Target element is not present")}
