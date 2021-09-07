var [a,b] = [10,20]
undefined
a
10
b
20
var a = [10,20,30]
undefined
var [c,d] = a
undefined
c
10
d
20


var data: data
VM370:1 Uncaught SyntaxError: Unexpected token ':'
data


function test(){
    return [1,2,3]
}

let [g, ,h] = test()
g
1
h
3


var y = {l:10,m:20};
var {l:abc,m:def} = y

abc
10
def
20