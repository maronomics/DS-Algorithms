/* Heap Sort
 * A comparison based sorting techniques based on binary heap data structure.
 * It is similar to selection sort where we first find the maximum element and
 * place the maximum element at the end. The same process is repeated for all 
 * the remaining elements
 * 
*/

Array.prototype.heapify = function (index, heapSize){
    let max = index
    const leftIndex = 2 * index + 1
    const rightIndex = 2 * index + 2

    if(leftIndex < heapSize && this[leftIndex] > this[max]){
        max = leftIndex
    }

    if(rightIndex < heapSize && this[rightIndex] > this[max]){
        max = rightIndex
    }

    if(max !== index){
        const temp = this[max]
        this[max] = this[index]
        this[index] = temp
        this.heapify(max, heapSize)
    }
}


// Heap sort an array by building a heap from the array
// and utilize the heap property
function heapSort(items){
    const length = items.length 

    for (let i = Math.floor(length / 2) - 1; i > -1; i--){
        items.heapify(i, length)
    }

    for (let j = length - 1; j > 0; j--){
        const tmp = items[0]
        items[0] = items[j]
        items[j] = tmp 
        items.heapify(0, j)
    }

    return items
}
