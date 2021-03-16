/* Insertion Sort
 * Works the same way sorting playing cards work.
 * The array is virtually split into a sorted and an unsorted part.
 * Values from unsorted array ispicked and placed in sorted at correct position.
 * (GeeksforGeeks)
 * 
 */

function insertSort(unsortedList){
    var length = unsortedList.length

    for (var i = 1; i < length; i++){
        // Copy current element
        var temp = unsortedList[i]
        // Check through the sorted part and comparew ith temp
        // If Greater then push element
        for (var j = i - 1; j >= 0 && (unsortedList[j] > temp); j--){
            // Shift item
            unsortedList[j + 1] = unsortedList[j]
        }

        // insert the copied number at the correct position in sorted list
        unsortedList[j + 1] = temp
    }
    return unsortedList
}


// Implementation

var sort = [3, 2, 11, 7, 13, 19, 17, 5, 41, 29, 23,37, 31]
// Array before sorting
console.log('Array before sort: ' + sort + '\n')
// Array after sorting
console.log('Array after sort: ' + insertSort(sort) + '\n')

