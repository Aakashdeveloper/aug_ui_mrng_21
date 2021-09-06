function
method
arrow function
iffi
generator
////////////////////////////////////////////////////////////////
var a = 10
var b = 20
a+b
30

////////////////////////////////////////////////////////////////
keyword nameoffuntio(parameters){
    what function will return
}


function add(a,b){
    return a+b
}

add(1,2)
3
add(10,11)
21
add('a','b')
"ab"
add('a','b','c')
"ab"
add('a',)
"aundefined"

function add(a,b){
    return a+b
}

add(1,2)
a == 1
b == 2


function isEven(userInput){
    var out;
    if(userInput%2==0){
        out=`Number ${userInput} is even`
    }else{
        out=`Number ${userInput} is odd`
    }
    return out
}

isEven(5)
"Number 5 is odd"
isEven(50)
"Number 50 is even"
isEven("hii")
"Number hii is odd"

//////////////////Rest Es6///////
function add(...args){
    // receive parameters as array
    console.log(args)
}


function add(...args){
   var out = 0;
   for(data of args){
    out = out+data
   }
  return out
}

add(1,2)
3
add(1,2,5,7,4,9)
28


/////////Method///////
function add(a,b){
    return a+b
}

var add = function(a,b){
    return a+b
}
add(1,2)
3


/////////Arrow Function///////
const add = (a,b) => {return a+b}