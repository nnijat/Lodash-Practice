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
console.log("sort result", _.sortBy(arr));


// Unite Test
describe('Test lodash function', () => {

    it('1. Test _chunk() function', () => {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        assert.deepEqual(_.chunk(arr, 5), [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]);
    });

    it('2. Test reverse() function', () => {
        let arr = [1, 2, 3, 4, 5];
        assert.deepEqual(_.reverse(arr), [5, 4, 3, 2, 1]);
    });

    it('3. Test without() function', () => {
        let arr = [1, 2, 3];
        assert.deepEqual(_.without(arr, 2), [1, 3]);
    });

    it('4. Test find() function', () => {
        let arrObj = [{ 'age': 1 }, { 'age': 2 }, { 'age': 3 }, { 'age': 4 }]
        assert.deepEqual(_.find(arrObj, function (obj) { return obj.age < 2; }), { age: 1 });
    });

    it('5. Test sort() function', () => {
        let arr = [4, 2, 1, 3, 5];
        assert.deepEqual(_.sortBy(arr), [1, 2, 3, 4, 5]);
    });
});
