function human(name,city){
    this.name = name;
    this.city = city;
}

function robot(name){
    this.name = name;
    this.legs = 2;
    this.age = 10
}

var john = new human('John','Delhi')
john
human {name: 'John', city: 'Delhi'}

var pepper = new robot('Pepper')
pepper
robot {name: 'Pepper', legs: 2, age: 10}

// inherit the property if robot in human

human.prototype = new robot();
// any object that made up of human now can access property of robot also

var aakash = new human('Aakash','Delhi')
aakash
human {name: 'Aakash', city: 'Delhi'}
aakash.name
'Aakash'
aakash.legs
2
aakash.age
10
john.legs
undefined