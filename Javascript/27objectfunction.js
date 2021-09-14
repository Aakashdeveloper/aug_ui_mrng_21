function language(name,country,city) {
    this.name = name;
    this.country = country;
    this.greet = () => {return `Say hi to ${name}`}
}

var Hindi = new language('Hindi','India')
Hindi.name
'Hindi'
Hindi.greet()
'Say hi to Hindi'

var English = new language('English','England')
English
language {name: 'English', country: 'England', greet: ƒ}


// constructor notation
var myObj = new Object();
undefined
myObj.city = "Delhi"
'Delhi'
myObj.country = "India"
'India'
myObj
{city: 'Delhi', country: 'India'}