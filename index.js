
var greet = {};

greet.init = function(name, drunk){
    
    this.name = name;
    this.drunk = drunk;

    if(name.length === 0){
        console.log('what you name?');
        return;
    }

    var result = this.say();
    
    return result;
}

greet.say = function() {

    if(this.drunk) {
        return "hello " + this.name + ", you look sexy today";
    } else {
        return "hello, " + this.name;
    }

}

module.exports = greet;