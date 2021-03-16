/* Selection Sort
 * 
 * Sorts an array by repeatedly finding the minimum element from unsorted part,
 * and putting it at the beginning.
 * Maintains two subarrays in a given subarray, one which is already sorted and
 * remaining subarray which is unsorted.
 *
 */

const selectionSort = (orList) => {
    // Copy the original array in a temp array, objects are passed by reference
    const list = [...orList]
    const length = list.length
    for(let i =0; i < length; i++) {
        let min = i
        for (let j = i + 1; j < length; j++) {
            if (list[min] > list[j]) {
                min = j
            }
        }

        if (min !== i){
            // new minimum found. Swap that with the current element
            ;[list[i], list[min]] = [list[min], list[i]]
        }
    }

    return list
}


// Implementation

var sort = [3, 2, 11, 7, 13, 19, 17, 5, 41, 29, 23,37, 31]
// Array before sorting
console.log('Array before sort: ' + sort + '\n')
// Array after sorting
console.log('Array after sort: ' + selectionSort(sort) + '\n')