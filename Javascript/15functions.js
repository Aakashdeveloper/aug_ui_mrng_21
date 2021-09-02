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

var data = ['John','Bhumika','Ankit','Aakash','Bhumika','John','Nikita','Bhumika','Ankit','Aakash','John']

function counter(name){
    var John = 0;
    var Bhumika = 0;
    var Ankit = 0;
    var Aakash = 0;
    var Nikita = 0;
    for(i=0;i<name.length;i++){
        if(name[i]=='John'){
            John = John+1
        }else if(name[i]=='Bhumika'){
            Bhumika=Bhumika+1
        }else if(name[i]=='Ankit'){
            Ankit=Ankit+1
        }else if(name[i]=='Aakash'){
            Aakash=Aakash+1
        }else if(name[i]=='Nikita'){
            Nikita=Nikita+1
        }
    }
    var out = [{'John':John},{'Bhumika':Bhumika},{'Ankit':Ankit},{'Aakash':Aakash},{'Nikita':Nikita}]
    return out
}
counter(data)
[
    {John: 3},
    {Bhumika: 3},
    {Ankit: 2},
    {Aakash: 2},
    {Nikita: 1}
]


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