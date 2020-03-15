console.log('Es6-class');

//class is similar to function.
//class contains object declaration and methods.
//class name starts with Uppercase.
//this refers to the constructor class.

class Person{
  constructor(name, age){
    this.personName = name;
    this.personAge = age;
  }
  display(){
    return ('Name of the person is ' + this.personName);
  }
}

//create the instance of personName.
let person1 = new Person('David');
console.log(person1.display());
let person12 = new Person('Robert');
console.log(person12.display());

//inheritance
class Citizen extends Person{
  constructor(name, country){
    super(name);
    this.personCountry = country;
  }
  displayAll(){
    return(this.display() + ' this person comes from ' + this.personCountry);
  }
}

//instance of Citizen
let person2 = new Citizen('smith', 'Australia');
console.log(person2.displayAll());
