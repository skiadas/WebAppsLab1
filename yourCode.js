/*
 * Name 1: Edwin
 * Name 2: Dakota
 */
// All your code will go here


function makeStack() {
    var values = [];
    function push(el) {
        values.push(el);
        return stack;
    };
    function pop() {
        if (isEmpty()) {
            throw new Error("Attempt to pop from empty stack");
        } else {
            return values.pop();
        }
    };
    function isEmpty() {
        return values.length === 0;
    };
    return {
        push: push,
        pop: pop,
        isEmpty: isEmpty
    };
}


// Do NOT change anything below this line.
/*
 * To allow node.js to run our tests. DO NOT CHANGE!
 */
try {
   module.exports = {
      binarySearch: binarySearch,
      countTags: countTags,
      extractHashTags: extractHashTags
   };
} catch (e) {}
