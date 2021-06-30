# const

The constant function from functional programming: it takes a value and returns a function that will return that value:

```javascript
var constant = require('const')
var alwaysA = constant('a');

alwaysA() //= 'a'
```

Useful to lifting a value into the world of functions, e.g. when using promises:
```javascript
getUserDetails()
	.then(getMessageFromUser, constant('User not found'))
```

Other names it's gone by in the past:

* K combinator
* lift
* always
