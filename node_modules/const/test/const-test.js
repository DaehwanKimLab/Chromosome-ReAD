var a = require('assert');
var constant = require('../');

describe('constant', function(){
	it('should return a function that returns the value passed in', function(){
		a.equal(constant('a')(), 'a');
	});
});
