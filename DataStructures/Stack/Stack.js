/* Stack!
 * 
 * An element is added on top of the Stack and Only the top element is deleted.
 * Implemented using Array, so an element can only be added and removed from the
 * end of the array.
 *
 */

// Functions:
// push, poop, peek, view, length

// Creates a stack Constructor
var Stack = (function(){
    function Stack (){
        // The top of the Stack
        this.top = 0
        // The array representation of the Stack
        this.stack = []
    }

    // Adds a value onto the end of the stack
    Stack.prototype.push = function (value) {
        this.stack[this.top] = value
        this.top++
    }

    // Removes and returns the value at the end ofthe Stack
    Stack.prototype.pop = function(){
        if (this.top === 0){
            return 'Stack is Empty'
        }

        this.top--
        var result = this.stack[this.top]
        this.stack = this.stack.splice(0, this.top)
        return result
    }

    // Returns the size of the Stack
    Stack.prototype.size = function(){
        return this.top
    }

    // Returns the value at the end of the Stack
    Stack.prototype.peek = function(){
        return this.stack[this.top - 1]
    }

    // To see all the elements of the Stack
    Stack.prototype.view = function(){
        for (var i = 0; i < this.top; i++){
            console.log(this.stack[i])
        }
    }

    return Stack

}())

// Implementation
var myStack = new Stack()

myStack.push(1)
myStack.push(8)
myStack.push(26)
myStack.push(69)
myStack.push(12)
myStack.push(33)
myStack.push(87)

console.log('Stack size: \n')
console.log(myStack.size())
console.log('Stack: ' + myStack.view() + '\n')
console.log('Last Element of Stack (peek): ' + myStack.peek() + '\n')
console.log('Last Element of Stack (pop): ' + myStack.pop() + '\n')
console.log('Last Element of Stack (peek): ' + myStack.peek() + '\n')
console.log('Last Element of Stack (pop): ' + myStack.pop() + '\n')
console.log('Last Element of Stack (peek): ' + myStack.peek() + '\n')
myStack.push(99)
console.log('Last Element of Stack (peek): ' + myStack.peek() + '\n')
console.log('Stack: ' + myStack.view() + '\n')
