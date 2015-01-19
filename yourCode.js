/*
 * Name 1: Edwin Nartey
 * Name 2: Dakota McCoy
 */

/*
 * BINARY SEARCH
 */
var binarySearch = function binarySearch(arr, val) {
   var lo, hi, mid,count;

   // You may need to add things here
   lo = 0;
   hi = arr.length - 1;
   mid = Math.floor(arr.length/2);

   if ((arr[lo] === val) || (arr[hi] === val)) {
      return true;
   }

   while (((hi - lo) > 1)) {     // You should change this with a proper condition
      // You will need to add things here
      if(arr[mid] === val){
         return true;
      } else if (arr[mid] < val) {
         lo = mid;
         mid = Math.floor((hi-lo)/2) + lo;
         } else if (arr[mid] > val) {
            hi = mid;
            mid = Math.floor((hi-lo)/2) + lo;
         }
      }
   // You may need to add things here
   return false;
};





/*
 * COUNTING TAGS
 */
var countTags = function countTags(items) {
   // Declare your local variables here. One was done for you.
   var tagCounts = {},obj,variableTag;

   // Add your code here
   items.forEach(function(obj){
      if(Array.isArray(obj.tags)){
         obj.tags.forEach(function(variableTag){
            if(!(variableTag in tagCounts)){
               tagCounts[variableTag] = 0;
            }
            tagCounts[variableTag] = tagCounts[variableTag] + 1;
         });
      }
   });
   return tagCounts;
};





/*
 * EXTRACT HASHTAGS
 */
var extractHashTags = function extractHashTags(str) {
   var matchedHashTags,matchedElement,finalizedHashTags=[],index=0,duplicate,finalizedElement;
   matchedHashTags = str.match(/#[a-z.A-Z]+/g);
   if(matchedHashTags != null){
      matchedHashTags.forEach(function(matchedElement, index){
         duplicate = finalizedHashTags.some(function(finalizedElement){
            return finalizedElement === matchedHashTags[index].slice(1);
         });
         if(!duplicate){
            finalizedHashTags.push(matchedElement.slice(1));
         }
         index ++;
      });
      return finalizedHashTags;
   } else {
      return finalizedHashTags;
   }     
};











