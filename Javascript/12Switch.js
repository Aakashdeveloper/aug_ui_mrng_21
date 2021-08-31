// multiple condition and multiple output  >>> ifelse
// one condition and one output >>> ternary
// one condition and multiple output >>> Switch

var name = "Aakash"
switch(name){
    case "Aakash":
        console.log(`hi ${name}`)
        break;
    case "Bhumika":
        console.log(`hi ${name}`)
        break;
    case "Eva":
        console.log(`hi ${name}`)
        break;
    default:
        console.log(`hi default case`)
}


var input = 2
switch(input%2){
    case 0:
        console.log(`Number ${input} is even`)
        break;
    case 1:
        console.log(`Number ${input} is odd`)
        break;
    default:
        console.log(`Invalid input`)
}

switch(new Date().getDay()){
    case 0:
        console.log(`Today is Sunday`)
        break;
    case 1:
        console.log(`Today is Monday`)
        break;
    case 2:
        console.log(`Today is Tuesday`)
        break;
    default:
        console.log(`Invalid input`)
}
