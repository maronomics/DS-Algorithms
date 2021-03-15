/* Queue
 * Follows a 'First In, First out' system
 * Data Structure allows an element to be added at the end of the list
 * and remove an element at the front of the list.
 * So the first item added is the first to be removed from the list.
 
 * Implementation uses Array to store the queue.
 * 
*/

// Functions: enqueue, dequeue, peek, view, length

const Queue = (function (){
    // constructor
    function Queue (){
        // Array representation of the Queue.
        this.queue = []
    }

    // Methods
    // Add a value to the end of the queue
    Queue.prototype.enqueue = function (item){
        this.queue.push(item)
    }

    // Removes the value at the front of the queue
    Queue.prototype.dequeue = function(){
        if(this.queue.length === 0){
            throw new Error('Queue is Empty')
        }

        const result = this.queue[0]
        // remove the item at position 0 in the Array
        this.queue.splice(0,1)

        return result
    }

    // Return the length of the queue
    Queue.prototype.length = function (){
        return this.queue.length
    }

    // Return the item at the front of the queue
    Queue.prototype.peek = function (){
        return this.queue[0]
    }

    // List all the items in the queue
    Queue.prototype.view = function (){
        console.log(this.queue)
    }

    return Queue
}())

// Implementation

const myQueue = new Queue()

myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.enqueue(5)
myQueue.enqueue(7)
myQueue.enqueue(11)
myQueue.enqueue(13)
myQueue.enqueue(17)

myQueue.view()

console.log('Queue Length: ' + myQueue.length() + '\n')
console.log('Front item: ' + myQueue.peek() + '\n')
console.log('Removed: ' + myQueue.dequeue() + '\n')
console.log('New Front item: ' + myQueue.peek() + '\n')
console.log('Removed: ' + myQueue.dequeue() + '\n')
console.log('New Front item: ' + myQueue.peek() + '\n')
console.log('Added 19 in queue: 19' + myQueue.enqueue(19) + '\n')
console.log('New Front item: ' + myQueue.peek() + '\n')

for (let i = 0; i < 6; i++){
    myQueue.dequeue()
    myQueue.view()
}
