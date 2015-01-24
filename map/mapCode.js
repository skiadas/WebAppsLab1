/*
 * Name 1: YourNameHere
 * Name 2: YourNameHere
 */

// Do not change the name of this function
var makeMap = function() {
// All your code will go inside this function
   // This object should contain the methods you want to expose:
   var o = {
      has: has,
      lookup: lookup,
      add: add,
      update: update,
      remove: remove
   };
   // Use this object to store the key-value pairs:
   var storedPairs = {};

   // Add initialization code here

   // Add local functions here
   function has(key){
      return storedPairs.hasOwnProperty(key);
   };
   
   function lookup(key){
      if(!has(key)){
         throw new Error("Tried to lookup a key that does not exist");
      }
      return storedPairs[key];
   };

   function add(key,value){
      if(has(key)){
         throw new Error("Tried to add the same key");
      }
      else{
      storedPairs[key] = value;
      return o;
      }
   };

   function update(key,value){
      if(!has(key)){
         throw new Error("Tried to update key that does not exist");
      }
      else{
         storedPairs[key] = value;
         return o;
      }
   };

   function remove(key){
      if(!has(key)){
         throw new Error("Tried to remove key that does not exist");
      }
      else{
         delete storedPairs[key];
      }
   };

   // Prepare the object o before returning it

   return o;
};


// Do NOT change anything below this line.
/*
 * To allow node.js to run our tests. DO NOT CHANGE!
 */
try {
   module.exports = {
      makeMap: makeMap
   };
} catch (e) {}
