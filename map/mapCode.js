/*
 * Name 1: Edwin Nartey
 * Name 2: Dakota McCoy
 */

// Do not change the name of this function
var makeMap = function() {
// All your code will go inside this function
   // This object should contain the methods you want to expose:
   var o = {
      has : function has(key){
         if (storedPairs.hasOwnProperty(key)) {
            return true;
         } 
         return false;
      },
      lookup : function lookup(key){
         if(storedPairs.hasOwnProperty(key)){
            return storedPairs[key];
         } else {
            throw new Error("Invalid Lookup: " + key +" not in Map");
         }
      },
      add : function add(key,value){
         if(o.has(key)){
            throw new Error("Map already contains" + key)
         } else {
         storedPairs[key] = value;
         return o;
      }
      },
      update : function update(key,value){
         if(storedPairs.hasOwnProperty(key)){
            storedPairs[key] = value;
         } else {
            throw new Error("Invalid Update: "+ key + "not in Map");
         }
         return o;
      },
      remove : function remove(key){
         if(storedPairs.hasOwnProperty(key)){
            storedPairs.delete(key);
         } else {
            throw new Error("Invalid Delete Attempted." + key + " not in Map" );
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
