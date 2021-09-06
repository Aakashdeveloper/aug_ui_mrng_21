var a = [1,2,3,4]

function add(a,b,c,d){
    return a+b+c+d
}

add(a)
"1,2,3,4undefinedundefinedundefined"
add(...a)
10


function add(a,b,c,d){
    console.log("a>>>>",a)
    console.log("b>>>>",b)
    console.log("c>>>>",c)
    console.log("d>>>>",d)
    return a+b+c+d
}
undefined
add(...a)
VM127:2 a>>>> 1
VM127:3 b>>>> 2
VM127:4 c>>>> 3
VM127:5 d>>>> 4


function add(...args){
    var out = 0;
    for(data of args){
        out = out+data
    }
    return out
}

add(...a)

var a = [4,5,6,3,6,23]
add(...a)
47