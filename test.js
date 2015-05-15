require('./array.and');
var assert = require('assert');


assert.equal([1,2,3,4,5].and([1,2,3,4,5]).join('.'),'1.1.2.2.3.3.4.4.5.5',
'test1');

assert.equal([1,2,3].and([4,5,6],[7,8,9]).join('.'),'1.4.7.2.5.8.3.6.9',
'test2');

assert.equal([1,2,3].and([4,5],[6]).join('.'),'1.4.6.2.5..3..',
'test3');

console.log('All OK');