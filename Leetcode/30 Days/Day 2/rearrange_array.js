// Rearrange array such that even positioned are greater than odd
// Input : A[] = {1, 2, 2, 1}
// Output :  1 2 1 2
// Explanation : For 1st element, 1  1, i = 2 is even. 3rd element, 1  1, i = 4 is even.

let arr = [1,2,2,1]
let n = arr.length

let arrange = function(arr,n){
    let output = []
    let p = 0, q = n - 1;
    for(let i = 0 ; i<n ; i++){
        if((i+1)% 2 == 0 ){
            output[i]=arr[q--]
        }
        else {
            output[i]= arr[p++]
        }
        for (let i = 0; i < n; i++) {
            console.log(arr[i])
        }

    }
    console.log(output)
}

arrange(arr,n)

