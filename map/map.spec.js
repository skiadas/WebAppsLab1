try {
   var chai = require('./../chai.js');
   var expect = chai.expect;
   var methods = require('./mapCode.js');
   var binarySearch = methods.binarySearch;
   var countTags = methods.countTags;
   var extractHashTags = methods.extractHashTags;
} catch (e) {}

function randomString(len) {
   var arr = [], caseRange, i;
   if (len == null) { len = 5; }
   for (i = 0; i < len; i += 1) {
      caseRange = [65, 97][Math.floor(Math.random() * 2)];
      arr.push(Math.floor(Math.random() * 26) + caseRange);
   }
   return String.fromCharCode.apply(String, arr);
}
// DO NOT CHANGE ANYTHING ABOVE THIS LINE

// Add your tests below
describe('Your code for maps', function() {
   it('defines a variable makeMap', function() {
      expect(function() { makeMap; }).to.not.throw(Error);
   });
});

describe('Your makeMap function', function() {
   var map = makeMap();
   it('returns an object', function() {
      expect(map).to.be.a('object');
   });
   it('returns an object with methods has, lookup, add, update, remove', function() {
      ['has', 'lookup', 'add','update','remove'].forEach(function(key) {
           expect(map[key]).to.be.a('function');
      });
   });
});

describe('map methods:', function() {
var map = makeMap();
beforeEach(function() {
        // This ensures every test sees a fresh empty stack
        map = makeMap();
    });

//Tests for the has function
   it('Has returns false on an empty map',function(){
      expect(map.has('something')).to.equal(false);
   });

   it('Has returns true if map has a specific key',function(){
      map.add('hasThis',2);
      expect(map.has('hasThis')).to.equal(true);
   });

//Tests for the lookup function
   it('lookup throws an error if key is not found',function(){
      expect(map.lookup('hi')).to.throw(Error);
   });

   it('lookup returns value for a key that is found',function(){
      map.add('myKey','value');
      expect(map.lookup('myKey')).to.equal('value');
   });


//Tests for the add function
   it('add returns the map',function(){
      expect(map.add('aKey',3)).to.be.a('object');
   });

   it('add throws an error if the map already has a key',function(){
      map.add('20',20);
      expect(map.add('20',10)).to.throw(Error);
   });

  it('add successfully adds a key/value pair',function(){
      map.add('hasThis',2);
      expect(map.lookup('hasThis')).to.equal(2);
   });

//Tests for the update function
  it('update throws error if key is not there',function(){
      expect(map.update('20',10)).to.throw(Error);
   });

   it('update returns the map',function(){
      map.add('aKey',23);
      expect(map.update('aKey',3)).to.be.a('object');
   });

   it('update successfully changes a keys value',function(){
      map.add('something',2);
      map.update('something',3)
      expect(map.lookup('something')).to.equal(3);
   });

//Tests for the remove function
   it('remove throws an error if key is not found',function(){
      expect(map.remove('hi')).to.throw(Error);
   });

   it('remove successfully gets rid of a key',function(){
      map.add('something',2);
      map.remove('something')
      expect(map.lookup('something')).to.throw(Error);
   });

});









