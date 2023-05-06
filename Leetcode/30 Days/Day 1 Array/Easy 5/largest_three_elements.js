// Find the largest three distinct elements in an array
arr = [10, 4, 3, 50, 23, 90, 67]
const largestThreeElements = function (arr){
    let first, second, third;
    second = first = third = Number.MIN_VALUE ;
    for (let i = 0 ; i<arr.length; i++){
        if (arr[i]>first) {
            third = second
            second = first
            first = arr[i]
        }
       else if (arr[i]> second && arr[i] != first ){
            third = second
            second = arr[i]
        }
       else if (arr[i] > third && arr[i] != second){
           third = arr[i]
        }
    }
console.log("first number", first,second,third)
}
largestThreeElements(arr)