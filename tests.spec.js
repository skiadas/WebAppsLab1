try {
   var chai = require('./chai.js');
   var expect = chai.expect;
   var methods = require('./yourCode.js');
   var binarySearch = methods.binarySearch;
   var countTags = methods.countTags;
   var extractHashTags = methods.extractHashTags;
} catch (e) {}

// Do not change anything above this line
describe('Your code for stacks', function() {
   it('defines a variable makeStack', function() {
   	expect(function() { makeStack; }).to.not.throw(Error);
   });
   // Add more "it" sections below
});