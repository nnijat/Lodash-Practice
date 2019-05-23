'use strict;'

var _ = require('lodash');
const assert = require('assert');

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrObj = [{ 'age': 20 }, { 'age': 25 }, { 'age': 30 }, { 'age': 35 }, { 'age': 40 }]

console.log("chunk result: ", _.chunk(arr, 9));
console.log("reverse result: ", _.reverse(arr));
console.log("withou result: ", _.without(arr, 1, 2, 3, 4, 5));
console.log("shuffle result: ", _.shuffle(arr));
console.log("find result: ", _.find(arrObj, function (obj) { return obj.age < 33; }));
console.log("size result: ", _.size(arr));


// Unite Test
//TESTING
describe('Test lodash function', () => {

    // Misstyped address
    it('1. uses the right address', () => {
        
            assert.deepEqual(_.chunk(arr, 9), [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], [ 10 ] ]);
            
        }
       
    );

    

    
});
