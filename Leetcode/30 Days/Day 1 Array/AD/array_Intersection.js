const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2, 1];

const intersectionArray = function (nums1,nums2){
    let result = [] ;
    for (let i = 0; i < nums1.length; i++){
        for (let j = 0; j< nums2.length; j++){
            if(nums1[i] === nums2[j] && !result.includes(nums1[i])){
                result.push(nums1[i])
            }
        }
    }
    console.log("Array",result)
}

intersectionArray(nums1,nums2)


// result.includes(nums1[i]) checks if the current element of nums1 array is already present in the result array.

// If both conditions are true, then the current element of nums1 array is a common element,
// which is not already in the result array. In this case,
// we add this element to the result array using result.push(nums1[i]).