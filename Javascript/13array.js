// array is a combination of similar/homogeneous as well as heterogeneous kind of data type
var a = [2,4,4534,435,322,12] (array of number)
var b = ['dsd','fewfe','sddsgs','ddg'] (array of strings)
var c = [true, true, false, true ] (array of boolean)
var d = [213,"fb","dbdf",true,3,34,false]

var a = [2,4,4534,435,322,12]
typeof(a)
"object"

var city = ["Delhi","Mumbai","Pune","London"]
typeof(city)
"object"
city.length
4
city[0]
"Delhi"
city[1]
"Mumbai"
city[city.length-1]
"London"

var city = ["Delhi","Mumbai","Pune","London"]
city.push("Amsterdam")
5
city
(5) ["Delhi", "Mumbai", "Pune", "London", "Amsterdam"]
city.push("Paris")
6
city
(6) ["Delhi", "Mumbai", "Pune", "London", "Amsterdam", "Paris"]


var city = ["Delhi", "Mumbai", "Pune", "London", "Amsterdam", "Paris"]
undefined
city.pop()
"Paris"
city
(5) ["Delhi", "Mumbai", "Pune", "London", "Amsterdam"]
city.pop(2)
"Amsterdam"
city.shift()
"Delhi"
city.unshift('Keev')
4
city
(4) ["Keev", "Mumbai", "Pune", "London"]

push > add as a last value of array
pop > remove the last value of array
shift > remove the first value of array
unshift > add the first value to array


var city = ["Delhi", "Mumbai", "Pune", "London", "Amsterdam", "Paris"]
city.slice(2)
(4) ["Pune", "London", "Amsterdam", "Paris"]
city
(6) ["Delhi", "Mumbai", "Pune", "London", "Amsterdam", "Paris"]
city.slice(3)
(3) ["London", "Amsterdam", "Paris"]

var city = ["Delhi", "Mumbai", "Pune", "London", "Amsterdam", "Paris"]
city.slice(2,5)
(3) ["Pune", "London", "Amsterdam"]
city.slice(2,6)
(4) ["Pune", "London", "Amsterdam", "Paris"]
city.slice(-1)
["Paris"]
city.slice(-2)
(2) ["Amsterdam", "Paris"]
city.slice(0,-1)
(5) ["Delhi", "Mumbai", "Pune", "London", "Amsterdam"]
city.slice(0,-2)
(4) ["Delhi", "Mumbai", "Pune", "London"]


var city = ["Delhi", "Mumbai", "Pune", "London", "Amsterdam", "Paris"]
city.splice(start,deleteCount,values)

// delete one value from index number 2
var city = ["Delhi", "Mumbai", "Pune", "London", "Amsterdam", "Paris"]
city.splice(2,1)
["Pune"]
["Delhi", "Mumbai", "London", "Amsterdam", "Paris"]

// on index 3 dont remove any value  but add 2 values
city.splice(3,0,'Nice','Helsinki')
["Delhi", "Mumbai", "London", "Nice", "Helsinki", "Amsterdam", "Paris"]

// on index 5 remove 1 value and add 2
city.splice(5,1,'Dubai','Keev')
["Amsterdam"]
city
(8) ["Delhi", "Mumbai", "London", "Nice", "Helsinki", "Dubai", "Keev", "Paris"]

var a = ['a','b',1,'c',2]
var b = [3,'d',4]

"a,b,1,c,23,d,4"
a.concat(b)
(8) ["a", "b", 1, "c", 2, 3, "d", 4]


var city = ["Delhi", "Mumbai", "London", "Nice", "Helsinki", "Dubai", "Keev", "Paris"]

city.indexOf('Delhi')
0
city.indexOf('Dubai')
5
city.indexOf('Amsterdam')
-1
city.indexOf('Pune')
-1

if value is the part of array you will get index number else -1

var a = "Hiii"
var b = [1,2,3]
Array.isArray(a)
false
Array.isArray(b)
true

var city = ["Delhi", "Mumbai", "London", "Nice", "Helsinki", "Dubai", "Keev", "Paris"]
city.sort()
(8) ["Delhi", "Dubai", "Helsinki", "Keev", "London", "Mumbai", "Nice", "Paris"]
city.reverse()
(8) ["Paris", "Nice", "Mumbai", "London", "Keev", "Helsinki", "Dubai", "Delhi"]

var city = ["Delhi",true, "Mumbai","amsterdam", "london",1 ,"Nice", "Helsinki",3, "Dubai",false, "Keev", "paris"]
city.sort()
(13) [1, 3, "Delhi", "Dubai", "Helsinki", "Keev", "Mumbai", "Nice", "amsterdam", false, "london", "paris", true]

var city = ["Paris",["Red", "Yellow",['Audi','Bmw','Merc'], "Green"], "Helsinki", "Dubai"]
city[0]
"Paris"
city[1]
(4) ["Red", "Yellow", Array(3), "Green"]
city[1][0]
"Red"
city[1][1]
"Yellow"
city[1][2]
(3) ["Audi", "Bmw", "Merc"]
city[1][2][0]
"Audi"

var city = ["Paris",["Red", "Yellow",['Audi','Bmw','Merc'], "Green"], "Helsinki", "Dubai"]
undefined
city.flat()
(7) ["Paris", "Red", "Yellow", Array(3), "Green", "Helsinki", "Dubai"]
city.flat(2)
(9) ["Paris", "Red", "Yellow", "Audi", "Bmw", "Merc", "Green", "Helsinki", "Dubai"]