/* Bubble Sort
 * The simplest sorting algorithm that works by repeatedly swapping
 * the adjacent elements if they are in wrong order
 * (GeeksforGeeks)
 * 
*/

function bubbleSort(arr){
   
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = 0; j < arr.length - i - 1; j++){
            if(arr[j]> arr[j + 1]){
                console.log(arr)
                var temp = arr[j] 
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr 
}

// Implementation

var sort = [3, 2, 11, 7, 13, 19, 17, 5, 41, 29, 23,37, 31]
// Array before sorting
console.log('Array before sort: ' + sort + '\n')
// Array after sorting
console.log('Array after sort: ' + bubbleSort(sort) + '\n')