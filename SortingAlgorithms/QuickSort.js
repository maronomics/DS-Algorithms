/* Quick Sort
 * Uses a divide and conquer strategy.
 * It picks an element as pivot and partitions the given array around the picked pivot
 * (GeeksforGeeks)
 *
 */

function quickSort (items){
    var length = items.length
    if (length <= 1){
        return items
    }

    var PIVOT = items[0]
    var GREATER = []
    var LESSER = []

    for (var i = 1; i < length; i++){
        if(items[i] > PIVOT){
            GREATER.push(items[i])
        } else {
            LESSER.push(items[i])
        }
    }

    var sorted = quickSort(LESSER)
    sorted.push(PIVOT)
    sorted = sorted.concat(quickSort(GREATER))

    return sorted
}

// Implementation

var sort = [3, 2, 11, 7, 13, 19, 17, 5, 41, 29, 23,37, 31]
// Array before sorting
console.log('Array before sort: ' + sort + '\n')
// Array after sorting
console.log('Array after sort: ' + quickSort(sort) + '\n')

