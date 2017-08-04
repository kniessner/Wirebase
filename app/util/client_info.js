class foo {
  static myProp = 'bar'
  someFunction() {
    console.log(this.myProp)
  }
}

class Bork {
   //Property initializer syntax
   instanceProperty = "bork";
   boundFunction = () => {
     return this.instanceProperty;
   }

   //Static class properties
   static staticProperty = "babelIsCool";
   static staticFunction = function() {
     return Bork.staticProperty;
   }
 }

 let myBork = new Bork;


 var idCounter = 1;

function Employee(name, dept) {
   this.name = name || '';
   this.dept = dept || 'general';
   this.id = idCounter++;
}

function Manager(name, dept, reports) {
      this.name = name || '';
}
Manager.prototype = new Employee;


var mac = new Engineer('Wood, Mac');


var testObject = { 'one': 1, 'two': 2, 'three': 3 };

localStorage.setItem('testObject', JSON.stringify(testObject));

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}
setObject('user_data', JSON.stringify(testObject))
