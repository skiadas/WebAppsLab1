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
describe('makeMap structure', function(){
   it('defines a variable makeMap', function(){
      expect(function() { makeMap; }).to.not.throw(Error);
   });
   it('actually defines a function', function(){
      expect(makeMap).to.be.a('function');
   });
  
});

describe('Your code for makeMap methods', function(){
   var k1,v1,k2,v2,map;
    beforeEach(function() {
        map = makeMap();
         k1 = randomString();
         k2 = randomString();
         v1 = Math.random();
         v2 = Math.random();
    });
     it('map is empty upon creation & has returns false', function(){
      expect(map.has()).to.be.equal(false);
      expect(map.isEmpty()).to.be.equal(true);
   });
   it('returns an object with methods has, lookup, add, update, remove', function() {
    ['has', 'lookup', 'add', 'update', 'remove'].forEach(function(key) {
        expect(map[key]).to.be.a('function');
    });
   });
   it('has function returns bool', function() {
      expect(map.has()).to.be.a('boolean');
   });
   it('add returns the map & has returns true', function(){
      expect(map.add(k1,v1)).to.equal(map);
      expect(map.has(k1)).to.be.equal(true);
   });
   it('add returns error when key already exists in the map', function(){
      map.add(k1,v1);
      expect(function(){
         map.add(k1,v1);
      }).to.throw(Error);
   });
   it('lookup returns value, ', function(){
      map.add(k1,v1);
      expect(map.lookup(k1)).to.be.equal(v1);
      expect(function(){
         map.lookup(k2);
      }).to.throw(Error);
   });
   it('lookup throws error for missing key', function(){
      map.add(k1,v1);
      expect(function(){
         map.lookup(k2);
      }).to.throw(Error);
   });
   it('lookup throws error for missing key & has returns false after remove', function(){
      map.add(k1,v1);
      map.add(k2,v2);
      map.remove(k2);
      expect(map.has(k2)).to.equal(false);
      expect(function(){
         map.lookup(k2);
      }).to.throw(Error);
   });
   it('remove throws error when given key does not exist', function(){
      expect(function(){
         map.remove(k1);
      }).to.throw(Error);
   });
   it('update throws error if key is missing', function(){
      expect(function(){
         map.update(v1);
      }).to.throw(Error);
   });
   it('update changes value of key', function(){
      map.add(k1,v1);
      map.update(k1,v2);
      expect(map.lookup(k1)).to.equal(v2);
   });
});
