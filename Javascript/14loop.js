for
while
do while
for of 
for in > object
map
filter

///////////////////////////////////////////////////////////////
For > generate series of value  or help to iterate over array
///////////////////////////////////////////////////////////////
for(starting, condition, increment)

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ["Delhi", "Mumbai", "Pune", "London", "Amsterdam", "Paris"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}

var city = ["Delhi", "Mumbai", "Pune", "London", "Amsterdam", "Paris"]
for(i=0;i<city.length;i++){
    console.log(`My City is ${city[i]}`)
}

My City is Delhi
My City is Mumbai
My City is Pune
My City is London
My City is Amsterdam
My City is Paris

var city = ["Paris",["Red", "Yellow", "Green"], "Helsinki", "Dubai"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}

var city = ["Paris",["Red", "Yellow", "Green"], "Helsinki", "Dubai"]
for(i=0;i<city.length;i++){
    for(j=0;j<city[i].length;j++)
    console.log(city[i][j])
}

var city = ["Paris",["Red", "Yellow", "Green"], "Helsinki", "Dubai"]
for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
}

Paris
Red
Yellow
Green
Helsinki
Dubai

//////////////
while
///////////
var i = 10
while(i<5){
    console.log(i)
    i++
}

//////////////
Do while
///////////
var i = 10
do{
    console.log(i)
    i++
}
while(i<5)


///////
for of
///////////
var city = ["Delhi", "Mumbai", "Pune", "London", "Amsterdam", "Paris"]
for(mycity of city){
    console.log(mycity)
}

var city = ["Paris",["Red", "Yellow", "Green"], "Helsinki", "Dubai"]
for(mycity of city){
    if(Array.isArray(mycity)){
        for(color of mycity){
            console.log(color)
        }
    }else{
        console.log(mycity)
    }
}
