/*
 * Name 1: YourNameHere
 * Name 2: YourNameHere
 */

// Do not change the name of this function
var makeMap = function() {
// All your code will go inside this function
   // This object should contain the methods you want to expose:
   var o = {
      has : function has(key){
         if (key in storedPairs) {
            return true;
         } 
         return false;
      },
      lookup : function lookup(key){
         if(key in storedPairs){
            return storedPairs[key];
         } else {
            throw new Error("Invalid Key");
         }
      },
      add : function add(key,value){
         storedPairs[key] = value;
         return o;
      },
      update : function update(key,value){
         if(key in storedPairs){
            storedPairs[key] = value;
         } else {
            throw new Error("Invalid Key");
         }
         return o;
      },
      remove : function remove(key){
         if(key in storedPairs){
            storedPairs.delete(key);
         } else {
            throw new Error("Invalid Delete Attempted. Key not in Map")
         }
      }
   };
   // Use this object to store the key-value pairs:
   var storedPairs = {};

   // Add initialization code here

   // Add local functions here
   var isEmpty;
   isEmpty = function(makeMap){
      for (var key in makeMap){
         if(makeMap.hasOwnProperty(key)){
            return false;
         }
      }
      return true;
   };

   // Prepare the object o before returning it

   return o;
}


// Do NOT change anything below this line.
/*
 * To allow node.js to run our tests. DO NOT CHANGE!
 */
try {
   module.exports = {
      makeMap: makeMap
   };
} catch (e) {}
