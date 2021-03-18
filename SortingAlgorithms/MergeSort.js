/* Merge Sort 
 * Like Quick Sort, Merge Sort is divide and conquer algorithm.
 * It divides the input array into two halves, calls itself for the two halves, 
 * and then merges the two sorted halve.
 *
*/

function merge(left,right){
    let arr = []
    // break out of the loop if any one of the array gets empty
    while (left.length && right.length){
        // Pick the smaller among the smallest element of left & right array
        if(left[0] < right[0]){
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    // Concatenating the leftover elements the
    // in case we didnt go through the entire left or right array
    return [...arr, ...left, ...right]
}

function mergeSort(array){
    const half = array.length / 2

    // Base case or teminationg case
    if(array.length < 2){
        return array 
    }

    const left = array.splice(0,half) 
    return merge(mergeSort(left),mergeSort(array))
}

// Implementation

var sort = [3, 2, 11, 7, 13, 19, 17, 5, 41, 29, 23,37, 31]
// Array before sorting
console.log('Array before sort: ' + sort + '\n')
// Array after sorting
console.log('Array after sort: ' + mergeSort(sort) + '\n')
