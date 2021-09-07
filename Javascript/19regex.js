Regular expression
^$

// if pattern does not match it will return null
var a = "Hi"
a.match("^([a-z])$")
null

// exactly match one letter word in small
var a = "h"
a.match("^([a-z])$")
["h", "h", index: 0, input: "h", groups: undefined]

// exactly match one letter word in small
var a = "hii"
a.match("^([a-z]{3})$")
["hii", "hii", index: 0, input: "hii", groups: undefined]

var a = "hiii"
a.match("^([a-z]{3})$")
null
var a = "hi"
a.match("^([a-z]{3})$")
null

// match letter word in small from 2 to 5
var a = "hii"
a.match("^([a-z]{2,5})$")

// match any length of letter word in small
var a = "hii"
a.match("^([a-z]+)$")
(2) ["hii", "hii", index: 0, input: "hii", groups: undefined]
var a = "h"
a.match("^([a-z]+)$")
(2) ["h", "h", index: 0, input: "h", groups: undefined]
var a = "Hii"
a.match("^([a-z]+)$")
null

var a = "Hii"
a.match("^([A-Za-z]+)$")
(2) ["Hii", "Hii", index: 0, input: "Hii", groups: undefined]
var a = "iiH"
a.match("^([A-Za-z]+)$")
(2) ["iiH", "iiH", index: 0, input: "iiH", groups: undefined]

var a = "iiH"
a.match("^([H-Ka-z]+)$")
 ["iiH", "iiH", index: 0, input: "iiH", groups: undefined]


var a = "iiH"
a.match("^([A-Za-z0-9$#@]+)$")
["$iiH", "$iiH", index: 0, input: "$iiH", groups: undefined]

var num = 7234657891
num.match("^[0-9]{10}$")
VM125:2 Uncaught TypeError: num.match is not a function
    at <anonymous>:2:5

var num = 7234657891
num.toString().match("^[0-9]{10}$")

var num = 72346578910
num.toString().match("^[0-9]{10}$")
null
var num = 7234657891A
num.toString().match("^[0-9]{10}$")

var str = "this hat is hot"
/h.t/g;


var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]

var email = "@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
