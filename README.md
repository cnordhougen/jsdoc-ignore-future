# jsdoc-ignore-future
JSDoc plugin allowing one to exempt from parsing code that may be supported by a transpiler but not JSDoc's parser.

# Usage
Add `"node_modules/jsdoc-ignore-future"` to the plugins array in your jsdoc config.
Put comments above & below code you wish for the JSDoc parser to ignore as in the following example:
```javascript
//es-future/
@Decorator('foo')
//es-future\
class MyClass {
    //es-future/
    myProp = 'something';
    static myStatic = [];
    //es-future\
    
    constructor( bar ) {
        this.bar = bar;
    }
}
```
