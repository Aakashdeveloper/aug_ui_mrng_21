var person = {
    fullname: function(){
        return this.firstname+" "+this.lastname;
    }
}

var John = {
    firstname:'John',
    lastname:'Dave'
}

person.fullname.call(John)
'John Dave'
person.fullname.apply(John)


var person = {
    fullname: function(city, country){
        return this.firstname+" "+this.lastname+" "+city+" "+country;
    }
}

var John = {
    firstname:'John',
    lastname:'Dave'
}

person.fullname.call(John,'Delhi','India')

'John Dave Delhi India'
person.fullname.apply(John,'Delhi','India')
VM189:1 Uncaught TypeError: CreateListFromArrayLike called on non-object
    at <anonymous>:1:17
(anonymous) @ VM189:1

person.fullname.apply(John,['Delhi','India'])
'John Dave Delhi India'

person.fullname.call(John,['Delhi','India'])
'John Dave Delhi,India undefined'

