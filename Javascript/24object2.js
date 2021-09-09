var calc ={
    sum: function(a,b){return a+b},
    sub: (a,b) => {return a-b}
}

calc.sum(5,2)
7
calc.sub(3,1)
2

var dbQuery = {
    find:(table) => {return `Select * from ${table}`},
    insert:(table,data) => {return `insert into ${table} name,city values(${data.name}, ${data.city})`}
}

dbQuery.find('Student')
"Select * from Student"
dbQuery.insert('employee',{name:'John',city:'Keev'})
"insert into employee name,city values(John, Keev)"

var movies = {
    name:'Avengers',
    rating:4.5,
    lang:'English',
    ind:'Hollywood'
}
// you can only update the property
Object.seal(movies)
{name: "Avengers", rating: 4.5, lang: "English", ind: "Hollywood"}
movies.type="Action"
"Action"
movies
{name: "Avengers", rating: 4.5, lang: "English", ind: "Hollywood"}
movies.rating=4.7
4.7
movies
{name: "Avengers", rating: 4.7, lang: "English", ind: "Hollywood"}
delete movies.ind
false
movies
{name: "Avengers", rating: 4.7, lang: "English", ind: "Hollywood"}

// we cannot update/add or remove any property
Object.freeze(movies)
movies.rating=4.8
4.8
movies
{name: "Avengers", rating: 4.7, lang: "English", ind: "Hollywood"}
movies.type="Action"
"Action"
movies
{name: "Avengers", rating: 4.7, lang: "English", ind: "Hollywood"}
delete movies.rating
false