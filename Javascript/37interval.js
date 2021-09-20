setInterval(function() {},time);

var myinterval = setInterval(function() {
    console.log(Math.random())
}, 3000)

0.09726987593295222
VM130:2 0.009438373182914406
VM130:2 0.39099258118264135
VM130:2 0.6049116834362103
VM130:2 0.48372298715970374
clearInterval(myinterval)


///////
run only once after given amount of time

setTimeout(function() {
    console.log(Math.random())
},3000)