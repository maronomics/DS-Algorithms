/* Bucket Sort
 * Bucket sort or bin sort is mainly usefull when input is uniformly distributed 
 * over a range.
 * 
 */

function bucketSort(list, size){
    if(undefined === size){
        size = 5
    }
    if(list.length === 0){
        return list
    }

    let min = list[0]
    let max = list[0]

    // Find min and max
    for (let i = 0; i < list.length; i++){
        if(list[i] < min){
            min = list[i]
        } else if(list[i] > max){
            max = list[i]
        }
    }

    // Number of buckets
    const count = Math.floor((max - min) / size) + 1

    // Create Buckets
    const buckets = []
    for (let i = 0; i < count; i++){
        buckets.push([])
    }

    // Fill buckets
    for (let i = 0; i < list.length; i++){
        const key = Math.floor((list[i] - min) / size)
        // console.log(key)
        buckets[key].push(list[i])
    }

    // Sort all buckets and merge into sorted list
    const sorted = []
    for (let i = 0; i < buckets.length; i++){
        const arr = buckets[i].sort()
        for(let j = 0; j < arr.length; j++){
            sorted.push(arr[j])
        }
    }
    return sorted
}


// Implementation

var sort = [1.03, 1.02, 1.11, 1.07, 1.13, 1.19, 1.17, 1.05, 1.41, 1.29, 1.23, 1.37, 1.31]
// Array before sorting
console.log('Array before sort: ' + sort + '\n')
// Array after sorting
console.log('Array after sort: ' + bucketSort(sort) + '\n')