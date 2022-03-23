
class Person 
{
	constructor(name='Anonymous', age=0)
	{
		this.name = name;
		this.age = age
	}
	getGreeting()
	{
		// return 'hi ' + this.name + '!';
		return `Hi. I am ${this.name}!`;

	}
	getDescription()
	{
		return `${this.name} is ${this.age} years old`;
	}

}

class Student extends Person
{
	constructor(name, age, major)
	{
		super(name, age);
		this.major=major
	}
	hasMajor()
	{
		return !!this.major;
	}
	getDescription()
	{
		let description = super.getDescription();
		
		if(this.hasMajor())
		{
			description += `. Major is ${this.major}`;
		}

		return description;
	}
}


// //Traveller -> Person
// Add support for homeLocation
// Override getGreeting
// 1. h1. I am Nihar. I am visiting from Jorhat
// 2. Hi. I am Anonymous


class Traveller extends Person
{
	constructor(name, age, homeLocation)
	{
		super(name, age)
		this.homeLocation = homeLocation
	}
	hasLocation()
	{
		return !!this.homeLocation;
	}
	getGreeting()
	{
		let greeting = super.getGreeting();

		if(this.hasLocation())
		{
			greeting+= `. I am visiting from ${this.homeLocation}`;
		}
		return greeting;
	}
}



// const me = new Student('Nihar', 24, 'Science');
// console.log(me.getDescription());

// const newMe = new Student();
// console.log(newMe.getDescription());

const me = new Traveller('Nihar', 24, 'Jorhat');
console.log(me.getGreeting());

const newMe = new Traveller();
console.log(newMe.getGreeting());
