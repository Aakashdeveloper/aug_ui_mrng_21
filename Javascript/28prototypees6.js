//es5
function language(name,country,) {
    this.name = name;
    this.country = country;
    this.greet = () => {return `Say hi to ${name}`}
}

//es6
class language1{
    constructor(name,country){
        this.name = name;
        this.country = country
    }

    greet = () => {
        return this.name + ' ' + this.country
    }
}

var French = new language1('French','France')
undefined
French
language1 {name: 'French', country: 'France', greet: ƒ}
French.greet()
'French France'

class geo{
    constructor(){
        this.lat = 43.22;
        this.long = 32.11
    }
}

class language2 extends geo{
    constructor(name,country){
        super()
        this.name = name;
        this.country = country
    }

    greet = () => {
        return this.name + ' ' + this.country
    }
}

