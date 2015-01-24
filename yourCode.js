/*
 * Name 1: Flynn Horell
 * Name 2: Luke Lentz
 */
// All your code will go here
var makeStack = (function() {
var arr = [];
var stack = {
	push: function push(el){
	},
	pop: function pop(){
	},
	isEmpty: function isEmpty(){
		return arr.length === 0;	
	}
};
return stack;
})

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
