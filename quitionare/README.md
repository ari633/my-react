### Explain how Object Oriented Programming works with a thorough understanding of the keyword this and the new keyword:
> the main idea of OOP is to divide the entire code into smaller pieces of code, we can call it an Object for each code that is divided.
`this` keyword is a reference to the property name of an object in the instance. `new` keyword is to initialize instance.
   
---

### What is the new class syntax and how to create instance methods, class methods?
> new class syntax is to initialize instance method, in below example we have `Square` class and want to call same method of `area` inside `Square` class we should initialize using `new` first then call the method name
```
class Square {
   constructor(width, height) {
     this.width = width;
     this.height = height;
   }
  
   get area() {
     return this.width * this.height
   } 
}

let square = new Square(10, 10);
console.log(square.area);
```
    
---

Give an example of how to implement inheritance in ES2015 using extends and super
```
class Square {
  
   constructor(width, height) {
     this.width = width;
     this.height = height;
   }
  
   get area() {
     return this.width * this.height
   } 

}

class Stadium extends Square {
   constructor(name, width, height) {
     super(width, height)
     this.name = name
   }
  
  details() {
     return "name: " + this.name + ", area: " + this.area;
  }
}

let stadium = new Stadium("wembley", 120, 10)
console.log(stadium.details())
// output: "name: wembley, area: 1200"
```
---

Imagine refactoring an ES5 application to use ES2015, how would you go about it?

> let's say i have an function constructor like this:
```
function Student(name, score){
  this.name = name;
  this.score = score;

  this.canPromote = function(){
    if(this.score > 70){
       return 'YES';
    } else{
      return 'NO';
    }
  }
}
```
want to reactor into class constructor:
```
class Student {
  constructor(name, score) {
     this.name = name;
     this.score = score;
  }
  
  canPromote() {
    if(this.score > 70){
       return 'YES';
    } else{
      return 'NO';
    }    
  }
}
```

---

Give an example of how you structure applications with design patterns using closure and modules 

> with clouse a function can access all variable that declare outside of function, it will look like this
```
 var whoIam = 'Im variable'

 function whatTheName() {
   console.log(whoIam);
 }
 
 whatTheName(); // output will have `Im variable`

```
> if we using module it will eliminate access variable outside of module, it will look like this:
```
var imModule = function () {
  
  var whoIam = 'Im variable'

  function whatTheName() {
    console.log(whoIam);
  }
  
  return {
    whatTheName: whatTheName
  }
}

imModule.whatTheName();
```

---

What are your preferred ways of testing your web application?
> DOM testing, usualy for testing the DOM node using jest. why the DOM must be tested? becuse to eliminate unexpected changes and make our confidence in the UI Code.

---

Which web server do you use? Why? Explain pros and cons of your choice.

> especialy for nodejs application because it will have special port if app running on it, i will use NGINX for reserve proxy, also have better performance to serve static content especially if we have single page app. 

---
What is your preferred production deployment process?
> using CI/CD workflows, we can easily to `test` -> `build` -> `deploy` once code has changed this process will make the developer more productive