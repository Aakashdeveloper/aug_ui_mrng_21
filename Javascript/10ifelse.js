if(condition){
    // do something 
}else{
 // do something 
}

var a = 7988
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

Number 7988 is even

var name = "Bhumika"
if(name == "Priya"){
    console.log(`Hi ${name} you are admin`)
}else if(name=="Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}else{
    console.log(`Hi ${name} you are unknown`)
}
VM60:5 Hi Bhumika you are super admin


var name = "John"
var role = "Admin"

if(role == "Admin"){
    if(name=="Aakash"){
        console.log(`Hi ${name} you are ${role}`)
    }else if(name== "John"){
        console.log(`Hi ${name} you are super ${role}`)
    }else{
        console.log(`Hi ${name} you are not a ${role}`)
    }
}else if(role == "User"){
    if(name=="Aakash"){
        console.log(`Hi ${name} you are ${role}`)
    }else if(name== "John"){
        console.log(`Hi ${name} you are super ${role}`)
    }else{
        console.log(`Hi ${name} you are not a ${role}`)
    }
}else{
    console.log(`Hi ${name} you unknown`)
}

var name = "Tina"
if(name=="Tina" || role=="Admin"){
    console.log(`Hi ${name} you are welcome`)
}else{
    console.log(`Hi ${name} you are not welcome`)
}

var name = "Tina"
if(name=="Tina" && role=="Admin"){
    console.log(`Hi ${name} you are welcome`)
}else{
    console.log(`Hi ${name} you are not welcome`)
}

var name = "Tina"
if(name=="Tina" && (role=="Admin" || role=="User")){
    console.log(`Hi ${name} you are welcome`)
}else{
    console.log(`Hi ${name} you are not welcome`)
}

var a = 1
if(a){
    console.log("Hii")
}else{
    console.log("Biee") 
}
"Hii"

var a = 0
if(a){
    console.log("Hii")
}else{
    console.log("Biee") 
}
"Biee"

var a = -1
if(a){
    console.log("Hii")
}else{
    console.log("Biee") 
}
"Hii"

//Ternary operators
// single line if else

var a = 10
a>10?"Hiii":"Biee"
"Biee"

var a = 10
a==10?"Hiii":"Biee"
"Hiii"

var a = 10
a==10?a+1:a-1

11
var a = 10
a>10?a+1:a-1
9

condition ? if condition is true : if condition is false


// you should not use 
var a = 10
a==10?a+1:a-1?"Hiii":"Biie"
11
var a = 10
a>10?a+1:a-1?"Hiii":"Biie"
"Hiii"