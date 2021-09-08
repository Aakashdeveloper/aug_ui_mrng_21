var moviename = "Avengers"
var movieRating = 4.5
var movielang = "English"

var moviename1 = "Jab We Met"
var movieRating1 = 4.6
var movielang1 = "Hindi"

var movie = {
    name:'Avengers',
    rating:4.5,
    lang:'English'
}

typeof(movie)
"object"

movie.name
"Avengers"
movie.rating
4.5

movie.rating = 4.7
4.7
movie
{name: "Avengers", rating: 4.7, lang: "English"}

movie.ind= "Hollywood"
"Hollywood"

movie
{name: "Avengers", rating: 4.7, lang: "English", ind: "Hollywood"}

delete movie.lang
true
movie
{name: "Avengers", rating: 4.7, ind: "Hollywood"}

movie['lang']
"English"
movie['rating'] = 4.1
4.1
movie
{name: "Avengers", rating: 4.1, lang: "English"}

var user = {
    name:'Ankit',
    email:'a@a.com',
    addresses:[
        {"home":"home address"},
        {"office":"office address"}
    ]
}
user.addresses[1].office
"office address"

/////JSON////
>JavaScript Object Notation

var movie = [
    {
        name:'Avengers',
        rating:4.5,
        lang:'English'
    },
    {
        name:'Jab We Met',
        rating:4.7,
        lang:'Hindi'
    },
    {
        name:'Death Race',
        rating:4.7,
        lang:'English',
        type:'Action'
    }
    
]

movie[0].name
"Avengers"
movie[1].lang
"Hindi"

for(mymovies of movie){
    console.log(mymovies.name)
}
Avengers
Jab We Met
Death Race

movie.map((data) => {return data.name})
["Avengers", "Jab We Met", "Death Race"]

for(i=0;i<movie.length;i++){
    if(i == 1 ){

    }else{
        console.log(movie[i].name)
    }
}

Avengers
Jab We Met
Death Race


// literal notation
var movie = {
    name:'Avengers',
    rating:4.5,
    lang:'English'
}

for(key in movie){
    console.log(key)
}
name
rating
lang


for(key in movie){
    console.log(movie[key])
}